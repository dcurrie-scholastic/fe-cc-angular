import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsTableComponent } from './schools-table/schools-table.component';
import { SchoolsResolver } from './schools.resolver';

import { CoursesTableComponent } from './courses-table/courses-table.component';
import { CoursesResolver } from './courses.resolver';

import { TeachersTableComponent } from './teachers-table/teachers-table.component';
import { TeachersResolver } from './teachers.resolver';

import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsResolver } from './students.resolver';

const routes: Routes = [
  {
    path: 'schools',
    component: SchoolsTableComponent,
    resolve: {
      schools: SchoolsResolver
    }
  },
  {
    path: 'courses',
    component: CoursesTableComponent,
    resolve: {
      courses: CoursesResolver
    }
  },
  {
    path: 'teachers',
    component: TeachersTableComponent,
    resolve: {
      teachers: TeachersResolver
    }
  },
  {
    path: 'students',
    component: StudentsTableComponent,
    resolve: {
      students: StudentsResolver
    }
  },
  { path: '',
    redirectTo: '/schools',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
