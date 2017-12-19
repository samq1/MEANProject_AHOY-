import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TeamsComponent } from './teams/teams.component';
import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full'
  //   component: AppComponent,
  // },
  {
    path: 'home',
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
    path: 'chat',
    pathMatch: 'full',
    component: ChatComponent,
    children: [],

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
export class AppRoutingModule { }
