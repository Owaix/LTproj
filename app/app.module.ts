import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrangeComponent } from './testComponents/orange/orange.component';
import { DynamicFormQuestionComponent } from './testComponents/apple/apple.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent, OrderByPipe } from './dynamic-forms/dynamic-forms.component';
import { QuestionService } from './testComponents/question-service';
import { FilterByColumnPipe } from './app.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':routeName', component: DynamicFormComponent }

];

@NgModule({
  declarations: [
    OrangeComponent,
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent  ,
    FilterByColumnPipe ,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    BrowserModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [DynamicFormQuestionComponent , QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
