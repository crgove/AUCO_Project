import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';
import UserService from 'src/app/services/user.service';
import { IChild } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service'

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {
  alumnos : IChild[] = [];
  id: string;
  
  constructor(private menuCtrl: MenuController, private _clase: ClassroomService,
    private _User : UserService, 
    private _activatedRoute: ActivatedRoute,
    private _Classroom: ClassroomService,
    private _route: Router,
    private _toast: ToastController,
    private _loading: LoadingController) { }

  async ngOnInit() {
  }

  
  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
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
    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    this._User.getChildrenByClass(this.id).then(result=>{
      this.alumnos = result;
    });
  }

  go(id: string){
    this._route.navigateByUrl(
      `/profile-screen/children/${id}`
    )
  }

  deleteChildFromClassroom(child: string){

    this._Classroom.deleteChildFromClassroom(this.id, child);
    this.presentToast("This student has been deleted from this classroom");
    this._route.navigateByUrl(
      `/profile-screen/${this._User.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._User.getCurrentUser().id}`
    )
  }

  toggleMenu(){
    this.menuCtrl.toggle();
    
  }
  


}
