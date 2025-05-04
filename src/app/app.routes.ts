import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HeroComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
