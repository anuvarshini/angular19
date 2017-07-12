import { Component, OnInit } from '@angular/core';
import { MyTodoService} from '../my-todo.service'; 

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {

  

  ngOnInit() {
  }


constructor(private myToDoServic: MyTodoService) {}
  
onNewItem(item: string){
  this.myToDoServic.adddItem(item);
}

}