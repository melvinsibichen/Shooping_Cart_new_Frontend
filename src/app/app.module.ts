import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


let myRoutes:Routes = [
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"add",
    component:AddproductComponent
  },
  {
    path:"view",
    component:ViewproductComponent
  },
  {
    path:"search",
    component:SearchproductComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    SearchproductComponent,
    UserloginComponent,
    UserregComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
