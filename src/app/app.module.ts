import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientService } from './patient.service';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [AppComponent, PatientComponent, PatientListComponent],

  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
