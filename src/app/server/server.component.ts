import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.scss']

})
export class ServerComponent
{
    userName:string = 'user';
    userStatus:string="Offline";
    users = [
      { firstName: 'Frank' ,lastName:'patil'},
        { firstName: 'Vic',lastName:'patil'},
        { firstName: 'Gina',lastName:'patil'}
    ];
    
    //users=[];
    constructor()
    {
        this.userStatus=Math.random() >0.5 ?'online' :'offline';
    }
    getUserStatus()
    {
        return this.userStatus;
    }
    getColor()
    {
       return this.userStatus==='online' ? 'green':'red';
    }
    onCreateUser()
    {
        //this.users.push(value);
        //console.log(this.users);
    }
    
}