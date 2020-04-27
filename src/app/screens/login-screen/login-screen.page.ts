import { Component, OnInit } from '@angular/core';
//import UserService from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import {IUser} from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { AngularFireDatabase } from '@angular/fire/database';

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
    private _userService: UserService, 
    private _route: Router,
    private toastController: ToastController, 
    private _loading: LoadingController,
    private _nav: NavController,
    private _db: AngularFireDatabase) { }
  
  /*userTexto : string = "";
  contraTexto : string = "";
  contrasenya = true;*/
  
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
      message: "DNI cant not be empty",
      duration: 3000
    });

    toastVerify.present();
  }

  async verifyAgain(){
    const toastVerify = await this.toastController.create({
      message: "Succesful",
      duration: 3000
    });

    toastVerify.present();
    console.log("ha pasado");
  }

  Implementar() {
    this.showLoading();

    if(this.id==""){
         this.verify();
    }else {
        //this.verifyAgain();
        this._route.navigateByUrl('/form-str-list');

          this.user = {
            "id": this.id
          }
        
        this._userService.setUser(this.user);
          
      }

    }
    
  }



 
  /*ngOnInit() {
    

  }*/
  