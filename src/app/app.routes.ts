import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CompetitionSoftwareComponent } from './pages/competition-software/competition-software.component';
import { WordNinjaComponent } from './pages/word-ninja/word-ninja.component';
import { WordPyramidsComponent } from './pages/word-pyramids/word-pyramids.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './utils/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about-us',
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
  {
    path: '**',
    component: NotFoundComponent
  },
];
