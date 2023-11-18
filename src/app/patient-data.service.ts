import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'http://your-php-backend-url';

  constructor(private http: HttpClient) {}

  savePatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-patient.php`, patientData);
  }

  getPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-patients.php`);
  }
}
