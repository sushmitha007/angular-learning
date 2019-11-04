import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OurApplicationRoutingModuleModule} from './our-application-routing-module/our-application-routing-module.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OurApplicationRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
