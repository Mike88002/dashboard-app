import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskData} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;

  isAddingTask= false;



  get selectedUserTasks(){
    return
  }

  onCompletedTask(id: string) {

  }

  onStartAddTask() {
      this.isAddingTask = true;
  }

  onDialogClosing() {
    this.isAddingTask = false;
  }

  onAddNewTask(taskData: NewTaskData) {

    this.isAddingTask = false;
  }

}
