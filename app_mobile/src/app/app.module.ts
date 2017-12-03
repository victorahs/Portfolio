import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SkillsPage} from '../pages/skills/skills';
import {ProjectPage} from '../pages/project/project';
import {enableProdMode} from '@angular/core';enableProdMode();

@NgModule({
    declarations: [
        MyApp,
        ContactPage,
        HomePage,
        TabsPage,
        SkillsPage,
        ProjectPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ContactPage,
        HomePage,
        TabsPage,
        SkillsPage,
        ProjectPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
