import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../../services/manager.service';
import { Router } from '@angular/router';
import { ClientsProjectRequestsModel } from '../../../models/clientProjectRequests.model';  // Make sure to import the correct model

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.css']
})
export class AddprojectsComponent implements OnInit {
  addProjectForm!: FormGroup;
  selectedFile: File | null = null;
  clientId: number | null = null;  // Declare a variable to store clientId

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getProjectData();  // Fetch project data when the component initializes

    const managerId = localStorage.getItem('EntityId');
    if (managerId) {
      // Autofill managerId in the form
      this.addProjectForm.patchValue({ managerId });
    }
  }

  initializeForm(): void {
    this.addProjectForm = this.fb.group({
      projectId: [''],
      clientId: ['', Validators.required],  // Client ID will be prefilled
      managerId: ['', Validators.required],  // Manager ID will be prefilled
      projectName: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      // clientFirstName: [''],
      // clientLastName: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      deadline: ['', Validators.required],
      actualCost: ['', Validators.required],
      teamMembers: ['', Validators.required],
      milestones: ['', Validators.required],
      isActive: ['', Validators.required],  // Assuming this is a boolean
      attachments: [null]  // Will store file data (Base64)
    });
  }

  // Fetch project data (including clientId) from the backend and prefill the form
  getProjectData(): void {
    const managerId = localStorage.getItem('EntityId');
    if (managerId) {
      this.managerService.getProjectRequestsManager(Number(managerId)).subscribe(
        (response: ClientsProjectRequestsModel[]) => {
          if (response && response.length > 0) {
            const project = response[0];  // Assuming you want to prefill with the first project
  
            // Prefill the form fields with the fetched data
            this.addProjectForm.patchValue({
              projectId: project.projectID,
              clientId: project.clientID,  // Prefill clientId
              projectName: project.projectTitle,
              description: project.projectDescription,
              startDate: project.preferredStartDate,
              endDate: project.deadline,
              budget: project.budget,
              status: project.isActive ,
              deadline: project.deadline,
               // Assuming budget as actual cost, modify as needed
              isActive: project.IsActive,
              attachments: project.Attachments  // If you need to handle file attachments
            });
  
            this.clientId = project.ClientID;  // Store clientId for future use if needed
          }
        },
        (error) => {
          console.error('Error fetching project data:', error);
        }
      );
    }
  }
  

  // Method to convert selected file to Base64
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      this.selectedFile = input.files[0];
      this.convertFileToBase64(this.selectedFile);
    }
  }

  goBack() {
    this.router.navigate(['/manager/projectrequests']);
  }

  // Convert the file to Base64
  convertFileToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      this.addProjectForm.patchValue({
        attachments: base64String  // Store the Base64 string in the form
      });
      console.log('File converted to Base64:', base64String);
    };
    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }

  // Handle form submission
  onSubmit(): void {
    if (this.addProjectForm.invalid) {
      console.log("Form is invalid");
      return; // Stop execution if form is invalid
    }
  
    // Prepare the project object from form values
    const project = this.addProjectForm.value;
  
    // Call the createProject method of the service with project data and Base64 file
    this.managerService.createProject(project).subscribe(
      (response: any) => {
        console.log('Project created successfully!', response);
        alert('Project created successfully!');
        
      // Reset the form after successful submission
      this.addProjectForm.reset();
        // // Assuming the response includes the ProjectID
        // const projectId = response.projectId; // Adjust based on your response structure
  
        // // After project creation, update the IsActive status in ClientProjectRequests table
        // this.managerService.updateProjectRequestStatus(projectId, true).subscribe(
        //   () => {
        //     console.log('Project status updated to active in ClientProjectRequests table.');
        //     // Optionally, navigate or display success message
        //   },
        //   (updateError: any) => {
        //     console.error('Error updating project status in ClientProjectRequests:', updateError);
        //   }
        // );
       },
      (error: any) => {
        console.error('Error creating project:', error);
        // Optionally, show an error message
      }
    );
  }
}  