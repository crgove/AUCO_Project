import { Component, OnInit } from '@angular/core';
import FormsService from 'src/app/services/forms.service';
import UserService from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFirebaseResponse, IFormResponse } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-form-res-list',
  templateUrl: './form-res-list.page.html',
  styleUrls: ['./form-res-list.page.scss'],
})
export class FormResListPage implements OnInit {

  formStructId: string
  responses: IFirebaseResponse<IFormResponse>[]

  constructor (
    private _formService: FormsService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    ) { }

  ngOnInit() {
    this.formStructId = this._activatedRoute.snapshot.paramMap.get('formStructId')
    this._formService.getFormResponseByStruct(this.formStructId).then(result => {
      this.responses = result
    })
  }

  navigate(idFormResponse: string){
    this._route.navigateByUrl(
      `/pregunta1-p2/${this.formStructId}/${idFormResponse}`
    )
  }
}
