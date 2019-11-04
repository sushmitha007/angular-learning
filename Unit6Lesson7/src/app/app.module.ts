import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OurApplicationRoutingModuleModule} from './our-application-routing-module/our-application-routing-module.module';
import { NotFoundComponent } from './not-found/not-found.component'
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './user/details/details.component';
import { ViewComponent } from './user/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserComponent,
    DetailsComponent,
    ViewComponent
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
