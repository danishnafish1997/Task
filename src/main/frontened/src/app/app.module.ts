import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskService} from "./tasks/task.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TasksComponent} from "./tasks/tasks.component";
import {ListTaskComponent} from "./tasks/list-task/list-task.component";
import {AddTaskComponent} from "./tasks/add-task/add-task.component";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
