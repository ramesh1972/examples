import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DepartmentsComponent } from './departments/departments.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  { path: '', component: AddCourseComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'departments', component: DepartmentsComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }

