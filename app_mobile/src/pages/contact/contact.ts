import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomePage } from '../home/home';
import 'rxjs/Rx';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    data: any;
    constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public appCtrl: App) {

    }

    onSubmit(myForm) {


        let headers = new Headers({
            'Content-Type': 'application/json',


        });
        let options = new RequestOptions({
            headers: headers

        });

        this.data = myForm.value;
        console.log(this.data);


        var link = 'http://victora.public.codeur.online/app_web/public/send';
        var data = JSON.stringify({alldata: this.data});


        this.http.post(link, data, options)
            .subscribe(data => {
            console.log(this.data.response = data);
            if(this.data.response.ok==true && this.data.response.status==200){
                this.showAlert(true);
            }else{
                this.showAlert(false);
            }

        }, error => {
            console.log("Oooops - it's not working!");
            this.showAlert(false);
        });
    }
    showAlert(trueOrfalse) {
        if (trueOrfalse==true){

            let alert = this.alertCtrl.create({

                title: "Thank you",
                subTitle: 'Your message has been sent successfully !',
                buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(HomePage);
        }else{
            let alert = this.alertCtrl.create({

                title: "Sorry",
                subTitle: 'Your message could not be sent ! Try again.',
                buttons: ['OK']
            });
            alert.present();


        }
    }

}
