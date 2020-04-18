import FirebaseSrc from './firebase.dataSource'
import FormsService from 'src/app/services/forms.service';
import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse, IFirebaseResponse } from '../../interfaces/interfaces';


@Injectable()
export default class FormsProvider extends FormsService {
    constructor(private _src: FirebaseSrc) {
        super()
    }

    async getFormsStructsByTeacher(idTeacher: string): Promise<IFirebaseResponse<IFormStruct>[]> {
        let result = await this._src.makeRequest({
            action: "GET_COL",
            path: `teachers/${idTeacher}/formStructs`
        })

        let notVoid = result as IFirebaseResponse<IFormStruct>[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }

    async addFormStructure(form: IFormStruct): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `teachers/${form.teacherId}/formStructs`,
            params: form
        })

        let notVoid = result as string
        this._src.makeRequest({
            action: "PUT",
            path: `formStructs/${notVoid}`,
            params: form
        })

        return notVoid
    }
    
    async addFormRespose(form: IFormResponse): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `children/${form.idChild}/formResponses`,
            params: form
        })

        let notVoid = result as string
        this._src.makeRequest({
            action: "PUT",
            path: `formResponses/${notVoid}`,
            params: form
        })
        
        return notVoid
    }
    
    async getFormsResponseByChild(idChild: string): Promise<IFirebaseResponse<IFormResponse>[]> {
        let result = await this._src.makeRequest({
            action: "GET_COL",
            path: `children/${idChild}/formResponses`
        })

        let notVoid = result as IFirebaseResponse<IFormResponse>[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }

    async getFormResponseById(idForm: string): Promise<IFormResponse> {
        let result = await this._src.makeRequest({
            action: "GET_ONE",
            path: `formResponses/${idForm}`
        })

        let notVoid = result as IFirebaseResponse<IFormResponse>[]

        if(notVoid.length > 0) {
            return notVoid[0].value
        } else {
            return undefined
        }
    }

    async getFormStructById(idForm: string): Promise<IFormStruct> {
        let result = await this._src.makeRequest({
            action: "GET_ONE",
            path: `formStructs/${idForm}`
        })

        let notVoid = result as IFirebaseResponse<IFormStruct>[]

        if(notVoid.length > 0) {
            return notVoid[0].value
        } else {
            return undefined
        }
    }

    async getFormResponseByStruct(idFormStruct: string): Promise<IFirebaseResponse<IFormResponse>[]> {
        let result = await this._src.makeRequest({
            action: "GET_COL",
            path: `formResponses`,
            params: {
                idFormStruct: idFormStruct  
            }
        })

        let notVoid = result as IFirebaseResponse<IFormResponse>[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }
}