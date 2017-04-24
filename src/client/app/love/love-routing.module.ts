import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoveComponent } from './love.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'love', component: LoveComponent }
    ])
  ],
  exports: [RouterModule]
})

export class LoveRoutingModule { }
