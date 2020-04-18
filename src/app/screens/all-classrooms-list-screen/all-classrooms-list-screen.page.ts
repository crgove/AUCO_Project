import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import UserService from 'src/app/services/user.service';
import { IClassroom } from 'src/app/interfaces/interfaces';
import { ToastController, LoadingController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-all-classrooms-list-screen',
  templateUrl: './all-classrooms-list-screen.page.html',
  styleUrls: ['./all-classrooms-list-screen.page.scss'],
})
export class AllClassroomsListScreenPage implements OnInit {

  classrooms: IClassroom[]=[];
  myClassrooms: boolean = false
  idTeacher: string;
  idClassroom: string;
  
  constructor(private _activatedRoute: ActivatedRoute, 
    private _class: ClassroomService,
    private _toast: ToastController,
    private _userService: UserService,
    private _route: Router, 
    private _loading: LoadingController) { }

  async ngOnInit() { }

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


  async ionViewWillEnter(){
    this.showLoading();
    this._class.getClassrooms().then(result =>{
      this.classrooms = result;
    })
  }


  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  addClassroom(id: string){


    this._class.addClassroomToTeacher(id, this._userService.getCurrentUser().id)
    this.presentToast("You haven been added in a new classroom");
    this._route.navigateByUrl(
      `/profile-screen/${this._userService.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._userService.getCurrentUser().id}`
    )
  
  }

}
