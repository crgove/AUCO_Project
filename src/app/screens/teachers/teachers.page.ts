import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import UserService from 'src/app/services/user.service';
import { ITeacher } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {

  teachers: ITeacher[]=[];

  constructor(
    private menuCtrl: MenuController, 
    private _user: UserService,
    private _loading: LoadingController,
    private _route: Router) { }

  ngOnInit() {
  }

    
  async presentLoading(){
    const loading = await this._loading.create({
      message: 'Waiting',
      duration: 1000
    })
    return await loading.present();
  }

  async ionViewWillEnter(){
    this.presentLoading();
    this._user.getAllTeachers().then( result =>{
      this.teachers = result
    })
  }

  navigate(idForm: string) {
    this._route.navigateByUrl(
      `/form-str-list/${idForm}`
    )
  }
}
