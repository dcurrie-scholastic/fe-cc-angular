import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseResolver } from 'src/app/core/courses/course.resolver';
import { CoursesResolver } from 'src/app/core/courses/courses.resolver';

import { CoursesTableComponent } from 'src/app/shared/courses/courses-table/courses-table.component';

import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesTableComponent,
    data: { header: 'Courses'},
    resolve: { courses: CoursesResolver }
  },
  {
    path: ':id',
    component: CourseDetailsComponent,
    resolve: {
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
