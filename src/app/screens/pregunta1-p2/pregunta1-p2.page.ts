import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { IFormStruct, IFormResponse, IUser, IFormResponseField, IFirebaseResponse } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';


@Component({
  selector: 'app-pregunta1-p2',
  templateUrl: './pregunta1-p2.page.html',
  styleUrls: ['./pregunta1-p2.page.scss'],
})
export class Pregunta1P2Page implements OnInit {
  idFormStruct = undefined; 
  idFormResponse = undefined;

  idChild: Promise<string>;
  user: IUser;
  id: string;

  struct: IFormStruct = {
    name: "",
    id: "29213271",
    fields: []
  }

  response: IFormResponse = {
    idFormStruct: "",
    idChild: "",
    fields: []
  }

  structs: IFirebaseResponse<IFormStruct>[] = [];
 
  constructor(
    private _menuCtrl: MenuController,
    private _formService: FormsService,
    private _db: AngularFireDatabase, 
    private _activatedRoute: ActivatedRoute,
    private _toast: ToastController,
    private _route: Router) {}

  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async ngOnInit() {
    this.idFormStruct = this._activatedRoute.snapshot.paramMap.get('idForm');  //IDFORM
    console.log("EL ID DEL FORMSTRUCT ES " + this.idFormStruct);

    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log("EL ID DEL USER ES " + this.id);

    this.idFormResponse = this._activatedRoute.snapshot.paramMap.get('idResponse');


    this._formService.getFormStructById(this.idFormStruct)
    .then(result => {
      if(this.idFormResponse == undefined) {
        this.response.idChild = this.id;
        console.log("IDCHILD VALE" + this.response.idChild);
        this.response.idFormStruct = this.idFormStruct;
        console.log("IDFORMSTRUCT VALE" + this.response.idFormStruct);
        this.response.fields = result.fields.map(field => ({
          type: field.type,
          response: ""
        }))

        console.log(this.response.fields);
      } else {
        this._formService.getFormResponseById(this.idFormResponse).then(response => this.response = response)
      }

      return result
    })
    .then(result => this.struct = result)



  }

  submit(){
    this._formService.addFormRespose(this.response);
    this.presentToast("Has rellenado el cuestionario.¡Gracias!");
    this._route.navigateByUrl('/lastpage')
  }

  toggleMenu(){
    this._menuCtrl.toggle();
  }



}