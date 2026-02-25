import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

// custom type definition
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  completedTask() {
    this.taskService.removeTask(this.task.id);
  }
}
