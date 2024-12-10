import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Outer Components
import { OuterHomeComponent } from './outer/outer-home/outer-home.component';
import { OuterAboutComponent } from './outer/outer-about/outer-about.component';
import { ServicesComponent } from './outer/services/services.component';
import { OuterContactComponent } from './outer/outer-contact/outer-contact.component';
import { SignupFormComponent } from './outer/signup-form/signup-form.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './outer/employee-login/employee-login.component';
import { ClientLoginComponent } from './outer/client-login/client-login.component';
import { ManagerLoginComponent } from './outer/manager-login/manager-login.component';

// Import Employee Components
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeechatComponent } from './employee/employeechat/employeechat.component';
import { EmployeeattendanceComponent } from './employee/employeeattendance/employeeattendance.component';
import { EmployeeprojectsComponent } from './employee/employeeprojects/employeeprojects.component';
import { EmployeetasksComponent } from './employee/employeetasks/employeetasks.component';
import { EmployeeleaverequestsComponent } from './employee/employeeleaverequests/employeeleaverequests.component';
import { EmployeeperformanceComponent } from './employee/employeeperformance/employeeperformance.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './admin/home/home.component';
import { ListManagerComponent } from './admin/manager/list-manager/list-manager.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { UpdateManagerComponent } from './admin/manager/update-manager/update-manager.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { UserRequestsComponent } from './admin/user-requests/user-requests.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { EmployeesettingsComponent } from './employee/employeesettings/employeesettings.component';
import { EmployeeprofileComponent } from './employee/employeeprofile/employeeprofile.component';
import { ManagerdashboardComponent } from './manager/managerdashboard/managerdashboard.component';
import { ManagerreportsComponent } from './manager/managerreports/managerreports.component';
import { ManagerprojectsComponent } from './manager/managerprojects/managerprojects.component';
import { ProjectslistComponent } from './manager/managerprojects/projectslist/projectslist.component';
import { AddprojectsComponent } from './manager/managerprojects/addprojects/addprojects.component';

import { UpdateprojectsComponent } from './manager/managerprojects/updateprojects/updateprojects.component';
import { ProjectrequestsComponent } from './manager/managerprojects/projectrequests/projectrequests.component';
import { ManagerleaveRequestsComponent } from './manager/managerleave-requests/managerleave-requests.component';
import { ManagerteamManagementComponent } from './manager/managerteam-management/managerteam-management.component';
import { ManagertaskAssignmentsComponent } from './manager/managertask-assignments/managertask-assignments.component';
import { ManagerperformanceReviewsComponent } from './manager/managerperformance-reviews/managerperformance-reviews.component';
import { ManagerJoinRoomComponent } from './manager/chat/manager-join-room/manager-join-room.component';
import { ManagerChatComponent } from './manager/chat/manager-chat/manager-chat.component';
import { ManagerWelcomeComponent } from './manager/chat/manager-welcome/manager-welcome.component';



const routes: Routes = [
  // ****************************Outer Page**************************
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: 'outer-home', component: OuterHomeComponent },      // Home Page
      { path: 'outer-contact', component: OuterContactComponent }, // Contact Us
      { path: 'outer-about', component: OuterAboutComponent },     // About Us
      { path: 'services', component: ServicesComponent },          // Our Services
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'manager-login', component: ManagerLoginComponent },
      { path: 'employee-login', component: EmployeeLoginComponent },
      { path: 'client-login', component: ClientLoginComponent },
      { path: 'signup-form', component: SignupFormComponent },     // Signup
      { path: '', redirectTo: 'outer-home', pathMatch: 'full' },   // Default redirect to Home
    ]
  },

  //******************************Employee Page*************************
  {
    path: 'employee',
    component: EmployeeLayoutComponent,
    children: [
      {path:'employeeprofile',component:EmployeeprofileComponent},
      { path: 'employeehome', component: EmployeehomeComponent },
      { path: 'employeechat', component: EmployeechatComponent },
      { path: 'employeeattendance', component: EmployeeattendanceComponent },
      { path: 'employeeprojects', component: EmployeeprojectsComponent },
      { path: 'employeetasks', component: EmployeetasksComponent },
      { path: 'employeeleave-requests', component: EmployeeleaverequestsComponent }, // Consistent naming
      { path: 'employeeperformance', component: EmployeeperformanceComponent },
      {path:'employeesettings', component:EmployeesettingsComponent},
      { path: '', redirectTo: 'employeehome', pathMatch: 'full' } // Default route for the employee layout
    ]
  },

  //***************************manager*************************************** 
  {
    path: 'manager',
    component: ManagerLayoutComponent,
    children: [
      {path:'managerdashboard', component:ManagerdashboardComponent},
      {path:'managerprojects',component:ManagerprojectsComponent},
      {path: 'managerreports', component:ManagerreportsComponent},
     {path:'projectslist', component:ProjectslistComponent},
     {path:'addprojects', component:AddprojectsComponent},
     {path:'updateprojects/:id',component:UpdateprojectsComponent},
     {path: 'projectrequests', component:ProjectrequestsComponent},
     {path:'managerleave-requests',component:ManagerleaveRequestsComponent},
     {path:'managerteam-management',component:ManagerteamManagementComponent},
     {path:'managertask-assignments',component:ManagertaskAssignmentsComponent},
     {path:'managerperformance-reviews',component:ManagerperformanceReviewsComponent},
     {path:'manager-join-room',component:ManagerJoinRoomComponent},
     {path:'manager-chat',component:ManagerChatComponent},
     {path:'manager-welcome',component:ManagerWelcomeComponent}
   ]
  },

  //*******************************Admin*************************************** */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'manager/list-manager', component: ListManagerComponent },
      { path: 'manager/add-manager', component: AddManagerComponent },
      { path: 'manager/update-manager', component: UpdateManagerComponent },
      { path: 'employee/list-employee', component: ListEmployeeComponent },
      { path: 'employee/add-employee', component: AddEmployeeComponent },
      { path: 'employee/update-employee', component: UpdateEmployeeComponent},
      { path: 'client/list-client', component: ListClientComponent },
      { path: 'client/add-client', component: AddClientComponent },
      { path: 'client/update-client', component: UpdateClientComponent},
      { path: 'user-requests', component: UserRequestsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
