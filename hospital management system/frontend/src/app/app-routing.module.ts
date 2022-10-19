import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { DischargepatientComponent } from './dischargepatient/dischargepatient.component';
import { HomeComponent } from './home/home.component';
import { Invoice } from './invoice';
import { InvoiceComponent } from './invoice/invoice.component';

import { LoginComponent } from './login/login.component';
import { RetrieveDoctorsComponent } from './retrieve-doctors/retrieve-doctors.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [
  {path:"aboutus",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"Total doctors",component:RetrieveDoctorsComponent},
  {path:"AddDoctor",component:AdddoctorComponent},
  {path:"AddPatient",component:AddpatientComponent},
  {path:"ViewPatient",component:ViewpatientComponent},
  {path:"ViewDoctor",component:ViewDoctorComponent},
  {path:"Invoice",component:InvoiceComponent},
  {path:"create-invoice",component:CreateInvoiceComponent},
  {path:"appointment",component:AppointmentComponent},
  {path:"dischargePatient",component:DischargepatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
