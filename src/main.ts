import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {Header} from './app/header/header';

bootstrapApplication(App)
  .catch((err) => console.error(err));
