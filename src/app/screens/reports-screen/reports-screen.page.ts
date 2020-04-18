import { Component, OnInit } from '@angular/core';
import { IReport } from 'src/app/interfaces/interfaces';
import { ActivatedRoute} from '@angular/router';
import ReportsService from 'src/app/services/reports.service';
import { MenuController, LoadingController} from '@ionic/angular';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-reports-screen',
  templateUrl: './reports-screen.page.html',
  styleUrls: ['./reports-screen.page.scss'],

})
export class ReportsScreenPage implements OnInit {
  
  reports: IReport[]=[];
 
  isTeacher=()=>this._user.getCurrentUser().isTeacher;

  constructor(private _report: ReportsService, private _activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController, private _user: UserService,
    private _loading: LoadingController) { }

    /*async presentLoading(){
      const loading = await this._loading.create({
        message: 'Waiting',
        duration: 2000
      })
  
      return await loading.present();
    }*/
  
  async showLoading(){
    const loading = await this._loading.create({
      message: "Waiting...",
      duration: 1000
    })

    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);

  }
  
  async ngOnInit() {}

  async ionViewWillEnter(){

    this.showLoading();
 
    if(this.isTeacher()) {
      this._report.getReportsByTeacher(this._user.getCurrentUser().id).then(result =>{
        this.reports = result;
      })
    }
    else {
      this._report.reportByChild(this._user.getCurrentUser().id).then(result =>{
        this.reports = result;
      })
    }
  }

  

  
}
