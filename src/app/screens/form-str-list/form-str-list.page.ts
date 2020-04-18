import { Component, OnInit } from '@angular/core';
import { IFirebaseResponse, IFormStruct, IUser } from 'src/app/interfaces/interfaces';
import FormsService from 'src/app/services/forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'app-form-str-list',
  templateUrl: './form-str-list.page.html',
  styleUrls: ['./form-str-list.page.scss'],
})
export class FormStrListPage implements OnInit {
  structs: IFirebaseResponse<IFormStruct>[] = []
  idTeacher: string 
  user: IUser
  isCreated: boolean = false

  constructor(
    private _formsService: FormsService,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _route: Router,
  ) { }

  async ngOnInit() {
    this.user = this._userService.getCurrentUser()
    this.idTeacher = this.user.isTeacher ? this.user.id : this._activatedRoute.snapshot.paramMap.get('idTeacher')
    this._formsService.getFormsStructsByTeacher(this.idTeacher).then(result => this.structs = result)
  }

  async ionViewWillEnter(){
    if(this.isCreated) {
      this.user = this._userService.getCurrentUser()
      this.idTeacher = this.user.isTeacher ? this.user.id : this._activatedRoute.snapshot.paramMap.get('idTeacher')
      this._formsService.getFormsStructsByTeacher(this.idTeacher).then(result => this.structs = result)
    }
    else this.isCreated = true
  }

  navigate(idForm: string) {
    if(this._userService.getCurrentUser().isTeacher)
      this._route.navigateByUrl(
        `/form-res-list/${idForm}`
      )
    else
      this._route.navigateByUrl(
        `/pregunta1-p2/${idForm}`
      )
  }

}
