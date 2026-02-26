import {Component, EventEmitter, inject, Output, Input, signal} from '@angular/core';
import {TasksService} from '../tasks.service';

export interface NewTaskData {
  title: string; summary: string; date: string;
}

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);

// how to do the same using signals:
//   enteredTitle = signal('');
//   enteredSummary = signal('');
//   enteredDate = signal('');
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter();
  @Output() addEvent = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
      this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      }, this.userId);
      this.close.emit();
  }

}
