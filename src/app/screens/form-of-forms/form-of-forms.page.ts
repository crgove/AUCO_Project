import { Component, OnInit } from '@angular/core';
import { IFormStruct } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import UserService from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-of-forms',
  templateUrl: './form-of-forms.page.html',
  styleUrls: ['./form-of-forms.page.scss'],
})
export class FormOfFormsPage implements OnInit {
  constructor(
    private _formsService: FormsService,
    private _userService: UserService,
    private _toast: ToastController,
    private _route: Router
    ) {}
  
  struct: IFormStruct = {
    name: "",
    teacherId: "",
    classesIds: [],
    fields: []
  }

  
  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  add(){
    this.struct.fields.push({
      requiered: false,
      label: "",
      type: "y/n"
    })
  }

  upload(){
    this.struct.teacherId = this._userService.getCurrentUser().id
    this._formsService.addFormStructure(this.struct)
    this.presentToast("Your form has been updated")
    this._route.navigateByUrl('/form-str-list')


  }

  ngOnInit() { }
}
