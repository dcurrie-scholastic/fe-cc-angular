import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { SchoolsTableComponent } from './schools-table/schools-table.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { TeachersTableComponent } from './teachers-table/teachers-table.component';
import { StudentsTableComponent } from './students-table/students-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SchoolsTableComponent,
    CoursesTableComponent,
    TeachersTableComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
