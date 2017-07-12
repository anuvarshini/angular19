import { Component, OnInit,Input } from '@angular/core';
import {ToDoService} from '../to-do.service';
import {MyTodoService} from  '../my-todo.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  thingsToDo: string[]; 
  @Input()  empNmae: string; 
  
  username='admin';
   
  constructor(private mytoDoService: MyTodoService) { }

  ngOnInit() {
 this.mytoDoService.getTasks().subscribe((newItems) => { 
   this.thingsToDo = newItems;
 } );

//   this.thingsToDo = this.mytoDoService.getTasks();
 } 


  

}
