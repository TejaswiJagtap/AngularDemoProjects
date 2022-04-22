import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  providers:[LoggingService]
})
export class TodolistComponent implements OnInit {

  listItem= '';
  List :string[]= [];

  constructor(private loggingService : LoggingService) { }

  ngOnInit(): void {
  }
  
  addToList() {
    this.List.push(this.listItem);
  }

 removeFromList(addedItem:any) {
    //this.List.splice(addedItem);
    var index = this.List.indexOf(addedItem);

    this.List.splice(index, 1); 
  }
}

