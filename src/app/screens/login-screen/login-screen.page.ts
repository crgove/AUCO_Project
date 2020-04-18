import { Component, OnInit } from '@angular/core';
import UserService from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
  

  constructor(
    private _userService: UserService, 
    private _route: Router,
    private toastController: ToastController, 
    private _loading: LoadingController) { }
  
  userTexto : string = "";
  contraTexto : string = "";
  contrasenya = true;
  
  /*async presentLoading(){
    const loading = await this._loading.create({
      message: 'Waiting',
      duration: 1000
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'The user name or password is incorrect',
      duration: 2000
    });
    toast.present();
  }

  CambiarInput(){
    this.contrasenya = !this.contrasenya;
  }

  Implementar() {
    this.showLoading();
    this._userService.login(this.userTexto,this.contraTexto).then(result => {
      if(result) {
        this._route.navigateByUrl(
          `/profile-screen/${this._userService.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._userService.getCurrentUser().id}`
        )
      }
      else {
        this.presentToast();
      }
    })
  }

 
  ngOnInit() {


  }

  

}
