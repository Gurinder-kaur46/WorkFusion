import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-side-bar',
  templateUrl: './manager-side-bar.component.html',
  styleUrls: ['./manager-side-bar.component.css'] // Corrected styleUrls
})
export class ManagerSideBarComponent {
  showProjectOptions = false;

  // Toggle the visibility of project options
  toggleProjectOptions() {
    this.showProjectOptions = !this.showProjectOptions;
  }
}
