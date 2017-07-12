import { Component } from '@angular/core';
import { ToDoService} from './to-do.service'; 
import { MyTodoService} from './my-todo.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello, app works!';

  empNmae = 'siva';
  thingsCompleted=[
    'Learn TypeScript'
  ];

//    constructor(private myToDoServic: MyTodoService) {}
  
// onNewItem(item: string){
//   this.myToDoServic.adddItem(item);
//}


myObj={
name: "siva",
age: 42
}

myArray=[ "rubha","anu","abhinav"  ];

isTrue = false;


}
