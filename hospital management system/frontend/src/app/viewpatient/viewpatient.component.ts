import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { RetrieveDoctorsService } from '../retrieve-doctors.service';
@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {
  patients:Array<Patient>=[];
  constructor(public rds:RetrieveDoctorsService) { }

  ngOnInit(): void {
    this.viewPatientList()
  }

  viewPatientList() {
    this.rds.ViewPatientList().subscribe({
      next:(result:any)=>this.patients=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  admitpatient(pid:number){ 
    if(confirm("Are You sure, You want to approve this patient?")){
    this.rds.approvePatientById(pid).subscribe({
      next:(result:any)=>console.log(result),
    error:(error:any)=>console.log(error),
    complete:()=>{this.viewPatientList();}
    })
  }
    
  }

  rejectPatient(pid:number){
    if(confirm("Are You sure, You want to reject this patient?")){
    this.rds.rejectPatientById(pid).subscribe({
      next:(result:any)=>console.log(result),
    error:(error:any)=>console.log(error),
    complete:()=>{this.viewPatientList();}
    })
  }}
  dischargepatient(){

  }


}
