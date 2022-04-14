import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamComponent } from './exam.component';

const routes: Routes = [
  {
    path:'exam',
    component: ExamComponent,
    children: [
      {
        path:'',
        component: ExamListComponent,
        pathMatch:'full'
      },
      {
        path:'detail',
        component:ExamDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class ExamRoutingModule { }
