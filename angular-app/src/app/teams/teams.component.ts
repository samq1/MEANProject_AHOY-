import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: Router) { }

  newTeam = {
    teamName: '',
    _captain : '',
    // _user : '',
  }
  teamSubmitted;

  onTeamSubmit(){
    console.log("IN: TeamComponent | onTeamSubmit()")
    console.log(this.newTeam)
    this._dataService.addTeam(this.newTeam)
      .then(response => this.teamSubmitted = response)
    this._route.navigateByUrl('chat')
    console.log("IN: TeamComponent | SUBMITTED")
    // this._dataService.addTeam(this.newTeam)
  }
  
  ngOnInit() {
  }

}
