import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoveComponent } from './love.component';
import { LoveRoutingModule } from './love-routing.module';
import { UnicornModule } from '../unicorn/unicorn.module';

@NgModule({
  imports: [CommonModule, LoveRoutingModule, UnicornModule],
  declarations: [LoveComponent],
  exports: [LoveComponent]
})

export class LoveModule { }
