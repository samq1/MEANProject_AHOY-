import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'createuser',
    pathMatch: 'full',
    component: UserComponent,
    children: [],
  },
  {
    path: 'Team',
    pathMatch: 'full',
    component: TeamsComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
    children: [],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
