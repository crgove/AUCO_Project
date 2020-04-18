import { Component, OnInit } from '@angular/core';
import { IUser, IReport, IChild, ITeacher } from 'src/app/interfaces/interfaces';
import ReportsService from 'src/app/services/reports.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {

  reports: IReport[]=[];
  user: IUser = {
    id: "",
    userName: "",
    password: "",
    isTeacher:false
  }

  child: IChild = {
    id: "0",
    name: "",
    surname: "",
    userName: "",
    password: "",
    isTeacher: false,
  }

  teacher: ITeacher = {
    id: "0",
    name: "",
    surname: "",
    userName: "",
    password: "",
    isTeacher: false,
  }
  
  constructor(private _report: ReportsService, private _user: UserService, 
    private _activatedRoute: ActivatedRoute, private menuCtrl: MenuController,
    private _toast: ToastController, private _route: Router,
    private _loading: LoadingController) { }

  async ngOnInit() {
  }

  async showLoading(){
    let loading = await this._loading.create({
      message: "Waiting...",
      duration: 1000
    });

    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 4000);

  }

  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async ionViewWillEnter(){
    this.user.isTeacher = this._activatedRoute.snapshot.paramMap.get('userType') == "teacher";
    this.user.id = this._activatedRoute.snapshot.paramMap.get('id');


    if(!this.user.isTeacher) {
      this._report.reportByChild(this.user.id).then(result => this.reports = result)
      this._user.getChildById(this.user.id).then(result => this.child = result)
    } else {
      this._report.getReportsByTeacher(this.user.id).then(result => this.reports = result)
      this._user.getTeacherById(this.user.id).then(result => this.teacher = result)
    }
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  currentUserIsTeacher = () => this._user.getCurrentUser().isTeacher && !this.user.isTeacher;

  deleteChild(){
    this._user.deleteChild(this.child.id);
    this.presentToast("This student has been deleted");
    this._route.navigateByUrl(
      `/profile-screen/${this._user.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._user.getCurrentUser().id}`
    )

  }
}
