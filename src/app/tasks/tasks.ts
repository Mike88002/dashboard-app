import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;

  isAddingTask= false;

  tasks =  [
    {
      id: 't1',
      userId: 'u1',
      title: 'master angular',
      summary: 'learn the basics of angular',
      dueDate: '2018-02-01',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id );
  }

  onStartAddTask() {
      this.isAddingTask = true;
  }

  onDialogClosing() {
    this.isAddingTask = false;
  }

  onAddNewTask(taskData: {title: string; summary: string; date: string}) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    console.log(this.tasks);

    this.isAddingTask = false;
  }

}
