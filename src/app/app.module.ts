import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Componets/home/home.component';
import { AboutComponent } from './Componets/about/about.component';
import { NavdarComponent } from './Componets/navdar/navdar.component';
import { FooterComponent } from './Componets/footer/footer.component';
import { SkillComponent } from './Componets/skill/skill.component';
import { ContactComponent } from './Componets/contact/contact.component';
import { ProjectsComponent } from './Componets/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavdarComponent,
    FooterComponent,
    SkillComponent,
    ContactComponent,
    ProjectsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
