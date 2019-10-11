import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleResolver } from 'src/app/core/people/people.resolver';
import { PersonResolver } from 'src/app/core/people/person.resolver';
import { StudentsResolver } from 'src/app/core/people/students.resolver';
import { TeachersResolver } from 'src/app/core/people/teachers.resolver';

import { PeopleTableComponent } from 'src/app/shared/people/people-table/people-table.component';

import { PersonDetailsComponent } from './person-details/person-details.component';



const routes: Routes = [
  {
    path: '',
    component: PeopleTableComponent,
    data: { header: 'People'},
    resolve: { people: PeopleResolver }
  },
  {
    path: 'teachers',
    component: PeopleTableComponent,
    data: { header: 'Teachers'},
    resolve: { people: TeachersResolver }
  },
  {
    path: 'students',
    component: PeopleTableComponent,
    data: { header: 'Students'},
    resolve: { people: StudentsResolver }
  },
  {
    path: ':id',
    component: PersonDetailsComponent,
    resolve: {
      person: PersonResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
