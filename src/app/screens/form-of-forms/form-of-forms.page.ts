import { Component, OnInit } from '@angular/core';
import { IUser, IFormStruct } from 'src/app/interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';

@Component({
  selector: 'app-form-of-forms',
  templateUrl: './form-of-forms.page.html',
  styleUrls: ['./form-of-forms.page.scss'],
})
export class FormOfFormsPage implements OnInit {
  constructor(
    private _formsService: FormsService,
    private _toast: ToastController,
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    ) {}

      user: IUser;
      id:string;

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log("He recibido un " + this.id);

  }
  struct: IFormStruct = {
    name: "",
    id: "29213271",
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
    this.struct.id = this.id
    this._formsService.addFormStructure(this.struct)
    console.log("ESTRUCTURA VALE: " + this.struct);
    this.presentToast("Your form has been updated")
    this._route.navigateByUrl('/lastpage')

  }

}
