import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'about', component:AboutComponent},
            {path: 'portfolio', component:PortfolioComponent},
            {path: 'project', component:ProjectComponent},
            {path: 'project/projectdetail/:project_id', component:ProjectdetailComponent},
            {path: 'testimonial', component:TestimonialComponent},
            {path: 'contact', component:ContactComponent},
             ])    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
