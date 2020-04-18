import { Component, OnInit } from '@angular/core';
import { IClassroom } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import UserService from 'src/app/services/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-class-list-screen',
  templateUrl: './class-list-screen.page.html',
  styleUrls: ['./class-list-screen.page.scss'],
})
export class ClassListScreenPage implements OnInit {
  classrooms: IClassroom[]=[];

  constructor(private _activatedRoute: ActivatedRoute, 
    private _class: ClassroomService,
    private _userService: UserService,
    private _loading: LoadingController) { }

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
    /*async presentLoading(){
      const loading = await this._loading.create({
        message: 'Waiting',
        duration: 1000
      })
  
      return await loading.present();
    }*/
  

  ngOnInit() {

  }

  async ionViewWillEnter(){

    this.showLoading();
    this._class.getClassroomsByTeacher(this._userService.getCurrentUser().id).then(result => {
      this.classrooms = result;
    })
  }

}
