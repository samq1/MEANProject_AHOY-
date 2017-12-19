import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  NewChannel = {
    channelName: '',
    purpose: '',
    _user: '',
    invited: ''
  }
  submitted;

  onSubmit() {
    console.log(this.NewChannel);
    this._dataService.addChannel(this.NewChannel)
      .then(response => this.submitted = response)
    console.log("YAS", this.submitted);
    this.NewChannel = {
      channelName: '',
      purpose: '',
      _user: '',
      invited: ''
    }
  }
  ngOnInit() {
  }

}
