import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Tasks} from './tasks';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskComponent} from './task/task.component';
import {SharedModule} from '../shared/sharedModule';

@NgModule({
  declarations: [
    Tasks, NewTaskComponent, TaskComponent
  ],
  exports:[Tasks],
  imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {

}
