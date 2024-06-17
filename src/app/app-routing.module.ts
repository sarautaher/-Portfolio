import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componets/home/home.component';
import { AboutComponent } from './Componets/about/about.component';
import { ContactComponent } from './Componets/contact/contact.component';
import { ProjectsComponent } from './Componets/projects/projects.component';
import { SkillComponent } from './Componets/skill/skill.component';


const routes: Routes = [
  {path:'' ,redirectTo:"Home" ,pathMatch:"full"}, 
  {path:'Home',component:HomeComponent,title:"Home"},
  {path:'About',component:AboutComponent,title:'About'},
  {path:'contact',component:ContactComponent,title:'contact'},
  {path:'Project',component:ProjectsComponent,title:'Project'},
  {path:'Skill',component:SkillComponent,title:'skill'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
