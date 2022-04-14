import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { FormsModule } from '@angular/forms';
import { ExamComponent } from './exam.component';


@NgModule({
  declarations: [
    ExamDetailComponent,
    ExamListComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule
  ]
})
export class ExamModule { }
