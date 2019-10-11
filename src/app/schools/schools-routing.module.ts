import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolResolver } from 'src/app/core/schools/school.resolver';
import { SchoolsResolver } from 'src/app/core/schools/schools.resolver';

import { SchoolsTableComponent } from './schools-table/schools-table.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolsTableComponent,
    resolve: {
      schools: SchoolsResolver
    }
  },
  {
    path: ':id',
    component: SchoolDetailsComponent,
    resolve: {
      school: SchoolResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
