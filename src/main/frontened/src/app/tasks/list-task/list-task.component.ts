import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from '../task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        (tasks: any[]) => {
          this.tasks = tasks
        },
        (error) => console.log(error)
      );

    this.taskService.onTaskAdded.subscribe(
      (task: Task) => this.tasks.push(task)
    );
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    this.taskService.saveTask(task,event.target.checked).subscribe();
  }
}
