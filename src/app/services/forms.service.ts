import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse, IFirebaseResponse, IUser } from '../interfaces/interfaces';


@Injectable()
export default abstract class FormsService {
    //RESPUESTAS
    abstract getFormResponseByStruct(idFormStruct: string): Promise<IFirebaseResponse<IFormResponse>[]>;
    abstract getFormsResponseByChild(idChild: string): Promise<IFirebaseResponse<IFormResponse>[]>;
    abstract getFormResponseById(idForm: string): Promise<IFormResponse>;
    abstract getUserNotManager(id:string): Promise<string>;
    abstract getUserManager(id:string): Promise<string>;
    
    //ESTRUCTURAS
    abstract getFormStructById(idForm: string): Promise<IFormStruct>;
    abstract getFormsStructsByUserManager(id: string): Promise<IFirebaseResponse<IFormStruct>[]>;

    //AÑADIR
    abstract addFormStructure(form: IFormStruct): Promise<string>;
    abstract addUser(user: IUser): Promise<string>;
    abstract addFormRespose(form: IFormResponse): Promise<string>;
}