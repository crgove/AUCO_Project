import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassroomService from 'src/app/services/classroom.service';
import { IClassroom } from 'src/app/interfaces/interfaces';
import UserService from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-classroom-screen',
  templateUrl: './add-classroom-screen.page.html',
  styleUrls: ['./add-classroom-screen.page.scss'],
})
export class AddClassroomScreenPage implements OnInit {

  id: string;
  name: string;


  constructor(private _activatedRoute: ActivatedRoute, private _toast: ToastController, 
    private _class: ClassroomService, private _user: UserService,  private _route: Router) { }

    async presentToast(message: string) {
      const toast = await this._toast.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }
  

  ngOnInit() {
  }

  introducirDatos(){

    let classT : (IClassroom);

    classT = {
      "id": "0",
      "name": this.name
    }

    if(this.name == undefined || this.name == "") {
      this.presentToast("you have to write a classroom");
      return
    } 

    // Temporal, el servidor deberia devolver al menos el nuevo id desde el post en add classroom, eliminando así getClassrooms
    this._class.addClassroom(classT).then(() => {
      return this._class.getClassrooms()
    })
    .then(result => {
      console.log(result)
      let idClass = result.filter(c => c.name.toUpperCase() == classT.name.toUpperCase())[0].id
      let idTeacher = this._user.getCurrentUser().id
      
      return this._class.addClassroomToTeacher(idClass, idTeacher) 
    })
    .then(() => {
      this.presentToast("Your classroom has been added");
      this._route.navigateByUrl(
        `/profile-screen/${this._user.getCurrentUser().isTeacher ? "teacher" : "children"}/${this._user.getCurrentUser().id}`
      )
    })
  }

}
