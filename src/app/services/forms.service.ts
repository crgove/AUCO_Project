import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse, IFirebaseResponse } from '../interfaces/interfaces';


@Injectable()
export default abstract class FormsService {
    abstract getFormResponseByStruct(idFormStruct: string): Promise<IFirebaseResponse<IFormResponse>[]>;
    abstract getFormsStructsByTeacher(idTeacher: string): Promise<IFirebaseResponse<IFormStruct>[]>;
    abstract getFormsResponseByChild(idChild: string): Promise<IFirebaseResponse<IFormResponse>[]>;
    abstract getFormResponseById(idForm: string): Promise<IFormResponse>;
    abstract getFormStructById(idForm: string): Promise<IFormStruct>;
    abstract addFormStructure(form: IFormStruct): Promise<string>;
    abstract addFormRespose(form: IFormResponse): Promise<string>;
}