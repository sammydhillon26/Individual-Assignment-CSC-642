import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './customers/survey-form/survey-form.component';
import { ResultsFormComponent } from './customers/results-form/results-form.component';


const routes: Routes = [
  {path:'',redirectTo:'/survey-form',pathMatch:'full'},
  {path:'survey-form', component: SurveyFormComponent},
  {path:'results-form', component: ResultsFormComponent},
  { path: '**', component: SurveyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
