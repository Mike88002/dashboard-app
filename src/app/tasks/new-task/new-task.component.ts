import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

// how to do the same using signals:
//   enteredTitle = signal('');
//   enteredSummary = signal('');
//   enteredDate = signal('');

  @Output() cancel = new EventEmitter();
  @Output() addEvent = new EventEmitter<{title: string; summary: string; date: string}>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
      this.addEvent.emit({
        title: this.enteredTitle,
        date: this.enteredDate,
        summary: this.enteredSummary
      });
  }

}
