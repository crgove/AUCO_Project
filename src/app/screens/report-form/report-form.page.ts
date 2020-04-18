import { Component, OnInit } from '@angular/core';
import UserService from 'src/app/services/user.service';
import ReportsService from 'src/app/services/reports.service';
import { IReport } from 'src/app/interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {

  constructor(private _user: UserService, private _report: ReportsService, 
    private _toast: ToastController, private _route: Router) { }
  report: IReport= {
    childrenId: +this._user.getCurrentUser().id,
    description: "",
    id: ""
  }

  title:string;
  description:string;

  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  save() {

    if(this.title == undefined || this.title == "" || this.report.description == undefined ||
     this.report.description =="") {
      this.presentToast("you have to write a report. Just to feel safe, it is confidential");
      return
    }

    this._report.addReport(this.report)
    this.presentToast("Your report has been created. Do not worry, it is confidential");
    this._route.navigateByUrl(
      `/profile-screen/${this._user.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._user.getCurrentUser().id}`
    )
  }
}
