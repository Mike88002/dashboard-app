import {NgModule} from '@angular/core';
import {App} from './app';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {Header} from './header/header';
import {User} from './user/user';
import {SharedModule} from './shared/sharedModule';
import {TasksModule} from './tasks/tasksModule';

// takes a configuration object to configure the module
@NgModule({
  //declare and register all the components
  //not for standalone components
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {

}
