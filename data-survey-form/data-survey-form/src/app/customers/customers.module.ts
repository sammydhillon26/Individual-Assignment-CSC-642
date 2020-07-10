import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ResultsFormComponent } from './results-form/results-form.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

 
@NgModule({
  declarations: [
    SurveyFormComponent,
    ResultsFormComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputMaskModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule ,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB-lHUtldgpNrLy2Smc3wCvBtonxu16wdU',
    })
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
})
export class CustomersModule { }
