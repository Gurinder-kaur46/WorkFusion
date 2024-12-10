import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManagerModel } from '../models/manager.model';
import { ClientsProjectRequestsModel } from '../models/clientProjectRequests.model';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 
  private apiUrl = 'https://localhost:7036/api'; // API base URL

  constructor(private http: HttpClient) {}

  // Fetch all projects
  getAllProjects(): Observable<ManagerModel[]> {
    return this.http.get<ManagerModel[]>(`${this.apiUrl}/Manager/projects`); // Assuming projects endpoint
  }

  // Fetch projects assigned to a specific manager by manager ID
  getProjectsForManager(managerId: number): Observable<ManagerModel[]> {
    return this.http.get<ManagerModel[]>(`${this.apiUrl}/Manager/manager/${managerId}`);
  }

  // Update project assigned to a manager
  updateProject(id: number, project: any): Observable<ManagerModel> {
    const url = `${this.apiUrl}/Manager/projects/${id}`;  
    return this.http.put<ManagerModel>(url, project);
  }

  // Fetch a specific project by its ID
  getProjectById(projectId: number): Observable<ManagerModel> {
    return this.http.get<ManagerModel>(`${this.apiUrl}/Manager/projects/${projectId}`);
  }

  // Fetch all project requests
  getAllProjectRequests(): Observable<ClientsProjectRequestsModel[]> {
    return this.http.get<ClientsProjectRequestsModel[]>(`${this.apiUrl}/Manager/projectsRequests`);
  }

  // Fetch project requests for a specific manager by manager ID
  getProjectRequestsManager(managerId: number): Observable<ClientsProjectRequestsModel[]> {
    return this.http.get<ClientsProjectRequestsModel[]>(`${this.apiUrl}/Manager/project-requests/${managerId}`);
  }


  createProject(project: any): Observable<any> {
    const url = `${this.apiUrl}/Manager/projects/`;
    return this.http.post<ManagerModel>(url, project)
  }
 
  // updateProjectRequestStatus(projectId: number, isActive: boolean): Observable<ClientsProjectRequestsModel> {
  //   const body = { ProjectID: projectId, IsActive: isActive }; 
  //   return this.http.put<ClientsProjectRequestsModel>(`${this.apiUrl}/Manager/projectsRequests/${projectId}`, body);
  // }
  

  
}
