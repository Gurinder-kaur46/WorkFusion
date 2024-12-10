import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrl: './manager-header.component.css'
})
export class ManagerHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('authToken'); // Clear the auth token from local storage
    this.router.navigate(['/outer-home']); // Redirect to the login page
  }

}
