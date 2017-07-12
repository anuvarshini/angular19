import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TitlecasePipe } from './titlecase.pipe';
import {ToDoService } from  './to-do.service';
import {MyTodoService} from  './my-todo.service';
import { ListViewComponent } from './list-view/list-view.component';
import { RouterModule, Routes } from '@angular/router';
import { routeConfig } from './app.routes';

import { ToDoPageComponent} from 'app/to-do-page/to-do-page.component';

// const routeConfig: Routes = [
//   {path: **, component: 404Component },
//   {path: 'todo',pathMatch: 'full',component: 'ToDoListComponent',
//   {path: 'aboutus', pathMatch: 'full' ,component: 'AboutUsComponent', 

// }]

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    TitlecasePipe,
    ListViewComponent,
    ToDoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ToDoService,MyTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
