import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PeopleRoutingModule } from './people-routing.module';

import { PersonDetailsComponent } from './person-details/person-details.component';

@NgModule({
  declarations: [PersonDetailsComponent],
  imports: [CommonModule, CoreModule, SharedModule, PeopleRoutingModule]
})
export class PeopleModule { }
