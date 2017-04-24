import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UnicornModule } from '../unicorn/unicorn.module';

@NgModule({
  imports: [HomeRoutingModule, UnicornModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})

export class HomeModule { }
