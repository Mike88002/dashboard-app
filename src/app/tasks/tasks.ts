import {Component, Input} from '@angular/core';
import {TasksService as TasksService} from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  //the constructor is automatically executed. this is how dependency injection works
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;

  isAddingTask= false;

  get selectedUserTasks(){
    return this.tasksService.getUserTask(this.userId);
  }



  onStartAddTask() {
      this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
