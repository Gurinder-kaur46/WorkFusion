import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './admin/home/home.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { ListEmployeeComponent } from './admin/employee/list-employee/list-employee.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { UpdateManagerComponent } from './admin/manager/update-manager/update-manager.component';
import { ListManagerComponent } from './admin/manager/list-manager/list-manager.component';
import { AddClientComponent } from './admin/client/add-client/add-client.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { ListClientComponent } from './admin/client/list-client/list-client.component';
import { AdminProfileUpdateComponent } from './admin/admin-profile-update/admin-profile-update.component';
import { AddProjectsComponent } from './admin/projects/add-projects/add-projects.component';
import { ListProjectsComponent } from './admin/projects/list-projects/list-projects.component';
import { UpdateProjectsComponent } from './admin/projects/update-projects/update-projects.component';
import { OuterHomeComponent } from './outer/outer-home/outer-home.component';
import { OuterAboutComponent } from './outer/outer-about/outer-about.component';
import { SignupFormComponent } from './outer/signup-form/signup-form.component';
import { ServicesComponent } from './outer/services/services.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './layout/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layout/admin-layout/admin-footer/admin-footer.component';
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { EmployeeHeaderComponent } from './layout/employee-layout/employee-header/employee-header.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ClientHeaderComponent } from './layout/client-layout/client-header/client-header.component';
import { ClientHeaderBarComponent } from './layout/client-layout/client-header-bar/client-header-bar.component';
import { ClientFooterComponent } from './layout/client-layout/client-footer/client-footer.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { ManagerHeaderComponent } from './layout/manager-layout/manager-header/manager-header.component';
import { ManagerFooterComponent } from './layout/manager-layout/manager-footer/manager-footer.component';
import { OuterLayoutComponent } from './layout/outer-layout/outer-layout.component';
import { FooterComponent } from './layout/outer-layout/footer/footer.component';
import { HeaderComponent } from './layout/outer-layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './outer/employee-login/employee-login.component';
import { ClientLoginComponent } from './outer/client-login/client-login.component';
import { ManagerLoginComponent } from './outer/manager-login/manager-login.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services/authentication.service';
import { EmployeeSideBarComponent } from './layout/employee-layout/employee-side-bar/employee-side-bar.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeechatComponent } from './employee/employeechat/employeechat.component';
import { EmployeeprofileComponent } from './employee/employeeprofile/employeeprofile.component';
import { EmployeeattendanceComponent } from './employee/employeeattendance/employeeattendance.component';
import { EmployeeprojectsComponent } from './employee/employeeprojects/employeeprojects.component';
import { EmployeetasksComponent } from './employee/employeetasks/employeetasks.component';
import { EmployeeleaverequestsComponent } from './employee/employeeleaverequests/employeeleaverequests.component';
import { EmployeeperformanceComponent } from './employee/employeeperformance/employeeperformance.component';
import { AdminSideBarComponent } from './layout/admin-layout/admin-side-bar/admin-side-bar.component';
import { EmployeeFooterComponent } from './layout/employee-layout/employee-footer/employee-footer.component';
import { ManagerSideBarComponent } from './layout/manager-layout/manager-side-bar/manager-side-bar.component';
import { EmployeeService } from './services/employee.service';
import { AdminService } from './services/admin.service';
import { UserRequestsComponent } from './admin/user-requests/user-requests.component';
import { EmployeesettingsComponent } from './employee/employeesettings/employeesettings.component';
import { ManagerdashboardComponent } from './manager/managerdashboard/managerdashboard.component';
import { ManagerteamManagementComponent } from './manager/managerteam-management/managerteam-management.component';
import { ManagerprojectsComponent } from './manager/managerprojects/managerprojects.component';
import { ManagertaskAssignmentsComponent } from './manager/managertask-assignments/managertask-assignments.component';
import { ManagerperformanceReviewsComponent } from './manager/managerperformance-reviews/managerperformance-reviews.component';
import { ManagerreportsComponent } from './manager/managerreports/managerreports.component';
import { ProjectslistComponent } from './manager/managerprojects/projectslist/projectslist.component';
import { AddprojectsComponent } from './manager/managerprojects/addprojects/addprojects.component';
import { authinterceptorInterceptor } from './interceptor/authinterceptor.interceptor';
import { UpdateprojectsComponent } from './manager/managerprojects/updateprojects/updateprojects.component';
import { ManagerService } from './services/manager.service';
import { ProjectrequestsComponent } from './manager/managerprojects/projectrequests/projectrequests.component';
import { ManagerleaveRequestsComponent } from './manager/managerleave-requests/managerleave-requests.component';
import { ManagerChatComponent } from './manager/chat/manager-chat/manager-chat.component';
import { ManagerJoinRoomComponent } from './manager/chat/manager-join-room/manager-join-room.component';
import { ManagerWelcomeComponent } from './manager/chat/manager-welcome/manager-welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent,
    ClientComponent,
    HomeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    AddManagerComponent,
    UpdateManagerComponent,
    ListManagerComponent,
    AddClientComponent,
    UpdateClientComponent,
    ListClientComponent,
    AdminProfileUpdateComponent,
    AddProjectsComponent,
    ListProjectsComponent,
    UpdateProjectsComponent,
    OuterHomeComponent,
    OuterAboutComponent,
    SignupFormComponent,
    ServicesComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    EmployeeLayoutComponent,
    ClientLayoutComponent,
    ClientHeaderComponent,
    ClientHeaderBarComponent,
    ClientFooterComponent,
    ManagerLayoutComponent,
    ManagerHeaderComponent,
    ManagerFooterComponent,
    OuterLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    ClientLoginComponent,
    ManagerLoginComponent,
    ManagerLoginComponent,
    EmployeeSideBarComponent,
    EmployeehomeComponent,
    EmployeechatComponent,
    EmployeeprofileComponent,
    EmployeeattendanceComponent,
    EmployeeprojectsComponent,
    EmployeetasksComponent,
    EmployeeleaverequestsComponent,
    EmployeeperformanceComponent,
    AdminSideBarComponent,
    EmployeeHeaderComponent,
    EmployeeFooterComponent,
    ManagerSideBarComponent,
    UserRequestsComponent,
    EmployeesettingsComponent,
    ManagerdashboardComponent,
    ManagerteamManagementComponent,
    ManagerprojectsComponent,
    ManagertaskAssignmentsComponent,
    ManagerperformanceReviewsComponent,
    ManagerreportsComponent,
    ProjectslistComponent,
    AddprojectsComponent,
    UpdateprojectsComponent,
    ProjectrequestsComponent,
    ManagerleaveRequestsComponent,
    ManagerChatComponent,
    ManagerJoinRoomComponent,
    ManagerWelcomeComponent,
    
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,          // Add FormsModule here
    HttpClientModule ,
    BrowserAnimationsModule, // Include this module for animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position of the toast messages
      preventDuplicates: true, // Prevent duplicate toasts
    })
  ],
  // providers: [UserService,AuthenticationService,EmployeeService,AdminService],
  // bootstrap: [AppComponent]

  providers: [UserService,AuthenticationService,EmployeeService,AdminService,ManagerService,
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authinterceptorInterceptor,
      multi: true
    },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
