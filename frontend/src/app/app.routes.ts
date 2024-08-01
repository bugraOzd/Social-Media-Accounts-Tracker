import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CompetitionSoftwareComponent } from './pages/competition-software/competition-software.component';
import { WordNinjaComponent } from './pages/word-ninja/word-ninja.component';
import { WordPyramidsComponent } from './pages/word-pyramids/word-pyramids.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignInComponent
  },
  {
    path: 'about-up',
    component: AboutUsComponent
  },
  {
    path: 'competition-software',
    component: CompetitionSoftwareComponent
  },
  {
    path: 'word-ninja',
    component: WordNinjaComponent
  },
  {
    path: 'word-pyramids',
    component: WordPyramidsComponent
  },
];
