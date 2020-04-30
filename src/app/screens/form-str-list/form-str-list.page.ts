import { Component, OnInit } from '@angular/core';
import { IFormStruct, IUser, IFirebaseResponse } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database'
import FormsService from 'src/app/services/forms.service';
//import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-form-str-list',
  templateUrl: './form-str-list.page.html',
  styleUrls: ['./form-str-list.page.scss'],
})
export class FormStrListPage implements OnInit {
  structs: IFirebaseResponse<IFormStruct>[] = [];
  user: IUser
  isCreated: boolean = false
  id: string;

  constructor(
    private _formsService: FormsService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
  ) { }

  async ngOnInit() {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log("He recibido un ID DE USUARIO DE FORM-STR-LIST " + this.id);
    this._formsService.getFormsStructsByUserManager('29213271').then(result => this.structs = result)

  }

  async ionViewWillEnter(){
    this._formsService.getFormsStructsByUserManager('29213271').then(result => this.structs = result)
  
    this.isCreated = true
  }

  navigate(idForm: string) {
    if(this.id === '29213271')
      this._route.navigateByUrl(
        `/form-res-list/${idForm}`
      )
    else
      this._route.navigateByUrl(
        `/pregunta1-p2/${idForm}/${this.id}`


      )
  }
  


} 

