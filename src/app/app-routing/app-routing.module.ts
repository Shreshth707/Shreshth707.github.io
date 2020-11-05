import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Router, RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
