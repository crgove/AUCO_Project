import FirebaseSrc from './firebase.dataSource'
import FormsService from 'src/app/services/forms.service';
import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse, IFirebaseResponse, IUser } from '../../interfaces/interfaces';


@Injectable()
export default class FormsProvider extends FormsService {
    constructor(private _src: FirebaseSrc) {
        super()
    }

    //FUNCIONA, NO TOCAR!!!!
    async getFormsStructsByUserManager(id: string):Promise<IFirebaseResponse<IFormStruct>[]>{
        let result = await this._src.makeRequest({
            action: "GET_COL",
            path: `userManager/${id}/formStructs`  
        })

        let notVoid = result as IFirebaseResponse<IFormStruct>[]

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

        //nuevo
    async getFormsResponseByChild(id: string): Promise<IFirebaseResponse<IFormResponse>[]> {
        let result = await this._src.makeRequest({
            action: "GET_COL",
            path: `children/${id}/formResponses`
        })

        let notVoid = result as IFirebaseResponse<IFormResponse>[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }


    //nuevo
    async getUserManager(id:string): Promise<string> {
        let result = await this._src.makeRequest({
            action: "GET_ONE",
            path: `userManager/${id}`
        })

        let notVoid = result as string;
        return notVoid
    }

    //nuevo
    async getUserNotManager(id:string): Promise<string> {
        let result = await this._src.makeRequest({
            action: "GET_ONE",
            path: `users/${id}`
        })

        let notVoid = result as string;
        return notVoid
    }
    //FUNCIONA. NO TOCAR!!!!!!!!

    async addFormStructure(form: IFormStruct): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `userManager/${form.id}/formStructs`,
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

    //FUNCIONA. NO TOCAR
    async addUser(user: IUser): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `user`,
            params: user
        })

        let notVoid = result as string;
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
    


    //AHORA
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