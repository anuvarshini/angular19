import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=["Akron","Erie","Milwaukee"];
  newItem="";
  pushItem= function()
  { 
   if (this.newItem != "")
   {
     this.items.push(this.newItem);
      this.newItem="";
   }

  }

  removeItem = function(index)
  {
   this.items.splice(index,1);
  }
}
