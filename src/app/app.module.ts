import {NgModule} from '@angular/core';
import {App} from './app';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {Header} from './header/header';
import {User} from './user/user';
import {Tasks} from './tasks/tasks';
import {CardComponent} from './shared/card/card.component';
import {NewTaskComponent} from './tasks/new-task/new-task.component';
import {TaskComponent} from './tasks/task/task.component';

// takes a configuration object to configure the module
@NgModule({
  //declare and register all the components
  //not for standalone components
  declarations: [App, Header, User, CardComponent, Tasks, NewTaskComponent, TaskComponent],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {

}
