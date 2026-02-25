import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent, NewTaskData} from './new-task/new-task.component';
import {TasksService as TasksService} from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTaskComponent,
  ],
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

  onCompletedTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onStartAddTask() {
      this.isAddingTask = true;
  }

  onDialogClosing() {
    this.isAddingTask = false;
  }

  onAddNewTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId)
    this.isAddingTask = false;
  }

}
