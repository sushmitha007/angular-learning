import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OurApplicationRoutingModuleModule} from './our-application-routing-module/our-application-routing-module.module';
import { NotFoundComponent } from './not-found/not-found.component'
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { View1Component } from './user/view1/view1.component';
import { View2Component } from './user/view2/view2.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserComponent,
    View1Component,
    View2Component,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OurApplicationRoutingModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
