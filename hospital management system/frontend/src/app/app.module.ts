import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RetrieveDoctorsComponent } from './retrieve-doctors/retrieve-doctors.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewAllpatientsComponent } from './view-allpatients/view-allpatients.component';
import { DischargepatientComponent } from './dischargepatient/dischargepatient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    RetrieveDoctorsComponent,
    AdddoctorComponent,
    AddpatientComponent,
    ViewpatientComponent,
    ViewDoctorComponent,
    InvoiceComponent,
    CreateInvoiceComponent,
    AppointmentComponent,
    ViewAllpatientsComponent,
    DischargepatientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
