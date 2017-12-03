import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
    selector: 'page-project',
    templateUrl: 'project.html'
})
export class ProjectPage {
    sliderOptions: any;
    projects: Array<any>;

    constructor(public navCtrl: NavController, public http: Http) {


        this.http.get('http://victora.public.codeur.online/app_web/public/projects')
            .map(res => res.json())
            .subscribe(
            project=> {
                this.projects = project;
            },
            err => {
                console.log(err);
            },
            () => console.log(this.projects)
        );

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProjectPage');
    }

}



