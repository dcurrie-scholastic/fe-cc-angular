import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../shared/shared.module';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsTableComponent } from './schools-table/schools-table.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

@NgModule({
  declarations: [SchoolsTableComponent, SchoolDetailsComponent],
  imports: [CommonModule, CoreModule, SharedModule, SchoolsRoutingModule]
})
export class SchoolsModule { }
