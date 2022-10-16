import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RetrieveDoctorsComponent } from './retrieve-doctors/retrieve-doctors.component';

const routes: Routes = [
  {path:"aboutus",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"Total doctors",component:RetrieveDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
