import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesTableComponent } from './courses/courses-table/courses-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleTableComponent } from './people/people-table/people-table.component';

const components = [CoursesTableComponent, NavbarComponent, PeopleTableComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule],
  exports: components
})
export class SharedModule { }
