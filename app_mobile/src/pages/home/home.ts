import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {SkillsPage} from '../skills/skills';

import {ProjectPage} from '../project/project';

import {ContactPage} from '../contact/contact';

import {App} from "ionic-angular";

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'

})
export class HomePage {

skillsPage = SkillsPage;
projectPage = ProjectPage;
contactPage = ContactPage;
abouts: Array<any>;
educations: Array<any>;

constructor(public navCtrl: NavController, public appctrl:App, public http: Http) {


    this.http.get('http://victora.public.codeur.online/app_web/public//abouts')
        .map(res => res.json())
        .subscribe(
        about=> {
            this.abouts = about;
        },
        err => {
            console.log(err);
        },
        () => console.log(this.abouts)
    );

    this.http.get('http://victora.public.codeur.online/app_web/public/education')
        .map(res => res.json())
        .subscribe(
        education=> {
            this.educations = education;
        },
        err => {
            console.log(err);
        },
        () => console.log(this.educations)
    );


}
}
