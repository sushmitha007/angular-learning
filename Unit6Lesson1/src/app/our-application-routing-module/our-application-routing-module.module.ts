import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouteReuseStrategy} from '@angular/router';
const routes = [];
@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    CommonModule
  ]
})
export class OurApplicationRoutingModuleModule { }
