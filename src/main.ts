import { platformBrowser } from '@angular/platform-browser';
import { AppModule} from './app/app.module';

//that's how to start an applications that uses modules
platformBrowser().bootstrapModule(AppModule);
