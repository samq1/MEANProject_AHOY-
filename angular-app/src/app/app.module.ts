import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { TeamsComponent } from './teams/teams.component';
import { ChannelComponent } from './channel/channel.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    UserComponent,
    MessageComponent,
    TeamsComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
