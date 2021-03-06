import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus:string="server is not created";
  serverName:string='TestServer';
  serverCreated=false;
  constructor() { 
    setTimeout(()=>{this.allowNewServer=true;},2000);
  }

  ngOnInit(): void {
  }
  onCreationStatus()
  {
    //this.serverCreationStatus="server is created! Name is " +this.serverName;
    this.serverCreated=true;
  }
  onUpdateServerName(event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
