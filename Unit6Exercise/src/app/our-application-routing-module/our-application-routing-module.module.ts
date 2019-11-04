import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouteReuseStrategy, Routes} from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserComponent } from '../user/user.component';
import { USER_CHILD_ROUTES } from '../user/user.routes';
import { LoginComponent } from '../login/login.component';
const routes:Routes = [
{path:'user/:name',component:UserComponent,children:USER_CHILD_ROUTES},
{path:'**', component:LoginComponent}

];
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
