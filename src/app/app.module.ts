import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//for form activity
import{FormsModule} from '@angular/forms';//3/6/19
import{RouterModule, Routes} from '@angular/router';//3-6-19
//for client server communication 
import { HttpModule} from '@angular/http';//4/6/19
import {HttpClientModule} from '@angular/common/http';//4/6/19
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{ReactiveFormsModule} from '@angular/forms';//for entering the input value

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PhotoComponent } from './photo/photo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Array1Component } from './array1/array1.component';
import { Array2Component } from './array2/array2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Json1Component } from './json1/json1.component';
import { Json2Component } from './json2/json2.component';
import { CrudComponent } from './crud/crud.component';

import { PaginationComponent } from './pagination/pagination.component';

import { SignupComponent } from './signup/signup.component';

import { MainComponent } from './main/main.component';
import { Child1Component } from './main/child1.component';
import { Child2Component } from './main/child2.component';
//custom services
import { MylibService } from './mylib.service';
import { ServiceexampleComponent } from './serviceexample/serviceexample.component';
import { RecentjobComponent } from './recentjob/recentjob.component';
import { Practarray1Component } from './practarray1/practarray1.component';




//http://localhost:4200/contact
const mypage:Routes=[
         
          {path:"array", component:UserComponent},
          {path:"contact", component:ContactusComponent},
          {path:"json1", component:Json1Component},
          {path:"json2", component:Json2Component},
          {path:"crud", component:CrudComponent},
          {path:"photo", component:PhotoComponent},
          {path:"pagination", component: PaginationComponent},
          {path:"main", component:MainComponent},
          {path:"signup", component: SignupComponent},
          {path:"recentjob", component: RecentjobComponent},
          {path:"pract", component: Practarray1Component},
          
          {path:"servicetest", component: ServiceexampleComponent},
          {path:"", redirectTo:"/array", pathMatch:'full'},
                                                                                                                   
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PhotoComponent,
    HeaderComponent,
    FooterComponent,
    Array1Component,
    Array2Component,
    ContactusComponent,
    Json1Component,
    Json2Component,
    CrudComponent,
    PaginationComponent,
    SignupComponent,
    MainComponent,
    Child1Component,
    Child2Component,
    ServiceexampleComponent,
    RecentjobComponent,
    Practarray1Component,
   
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mypage),
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
     
  ],
  providers: [MylibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
