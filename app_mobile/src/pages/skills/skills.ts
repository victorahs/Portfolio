import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-skills',
    templateUrl: 'skills.html'
})
export class SkillsPage {
    skills:  Array <any>;

    constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {

        this.http.get('http://victora.public.codeur.online/app_web/public//skills')
            .map(res => res.json())
            .subscribe(
            skill=> {
                this.skills = skill;
            },
            err => {
                console.log(err);
            },
            () => console.log(this.skills)
        );


    }
}


