import { NgModule } from '@angular/core';

import { UnicornListComponent } from './unicorn-list/unicorn-list.component';
import { UnicornCreationComponent } from './unicorn-creation/unicorn-creation.component';
import { SharedModule } from '../shared/shared.module';
import { UnicornService } from './unicorn.service';



@NgModule({
  imports: [SharedModule],
  declarations: [UnicornListComponent,UnicornCreationComponent],
  exports: [UnicornListComponent,UnicornCreationComponent],
  providers: [UnicornService]
})

export class UnicornModule { }
