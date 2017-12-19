import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  newTeam = {
    reason: '',
    typeofCrew: '',
    crewSize:'',
    role: '',
  }
  teamSubmitted;

  onTeamSubmit(){
    console.log("IN: TeamComponent | onTeamSubmit()")
    console.log(this.newTeam)
    this._dataService.addTeam(this.newTeam)
      .then(response => this.teamSubmitted = response)
    console.log("IN: TeamComponent | SUBMITTED")
    this._dataService.getUser()
  }
  ngOnInit() {
  }

}
