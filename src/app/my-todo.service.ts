import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MyTodoService {

 changes: BehaviorSubject<string[]> = new BehaviorSubject([]);
 thingsToDo: string []=[];

  constructor() { }
 
   adddItem(item: string)
   {
    this.thingsToDo.push(item);
    this.changes.next(this.thingsToDo);

   }

   getTasks(){
     return this.changes;
      // return this.thingsToDo;

   }

}
