import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent {
  patient = {
    name: '',
    dob: '',
    gender: '',
    serviceType: '',
    comments: '',
  };

  constructor(private patientService: PatientService) {}

  savePatient() {
    this.patientService.savePatient(this.patient).subscribe(
      (response) => {},
      (error) => {}
    );
  }
}
