import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import {DataGridModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { ImageService } from './image/image.service';
import { ProjectService } from './projectdetail/project.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

    HomeComponent,
    PortfolioComponent,
    ProjectComponent,
    ProjectdetailComponent,
    TestimonialComponent,
    ContactComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,
    HttpModule,DataGridModule
  ],
  providers: [ImageService,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
