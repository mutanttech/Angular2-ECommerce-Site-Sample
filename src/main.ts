import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//This is main app module inclusion. All other modules will be wired to this in app.module.ts
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
