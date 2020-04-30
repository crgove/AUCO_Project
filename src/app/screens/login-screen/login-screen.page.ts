import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import {IUser, IUserManager} from 'src/app/interfaces/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage  {

  users: (IUser)[] = [];

  user: IUser;
  id: string;

  constructor(
    private _route: Router,
    private toastController: ToastController, 
    private _loading: LoadingController,
    private _nav: NavController,
    private _db: AngularFireDatabase,
    private _formsService: FormsService,) { }
  
  
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

  async verify(){
    const toastVerify = await this.toastController.create({
      message: "DNI no puede estar vacío",
      duration: 3000
    });

    toastVerify.present();
  }

  async verifyAgain(){
    const toastVerify = await this.toastController.create({
      message: "¡Muy bien. Has entrado!",
      duration: 3000
    });

    toastVerify.present();
  }

  Implementar() {
    if(this.id==undefined){
        this.verify();
        this._route.navigateByUrl('/login-screen')

    }else {
      this.user = {
        id: this.id
      }

    this._formsService.addUser(this.user);
    this.verifyAgain();
          
    }


  }




  }




    


