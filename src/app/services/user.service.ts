import {Injectable} from '@angular/core';
import { IUser } from '../interfaces/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

/*@Injectable()
export default abstract class UserService {
    abstract login(userName: string, password: string): Promise <boolean>;
    abstract logOff(): void
    abstract registerChildren(children: IChild): Promise <void>;
    abstract getCurrentUser(): IUser | undefined;
    abstract getChildById(id: string): Promise<IChild | undefined>;
    abstract getTeacherById(id: string): Promise<ITeacher | undefined>;
    abstract getChildrenByClass(idClass: string): Promise<IChild[]>;
    abstract modifyChild(IChild): Promise <void>;
    abstract modifyTeacher(ITeacher): Promise <void>;
    abstract deleteChild(id: string): Promise <void>;
    abstract getAllTeachers(): Promise<ITeacher[]>;

}*/

@Injectable()



export class UserService {

    user: (IUser)[]=[];

    constructor(private _db: AngularFireDatabase) {

    }

    //Función creada para insertar un producto llamando a la base de datos. //FUNCIONA
    setUser(user: IUser){

        this.user;
        let referencia = this._db.database.ref("Users");
        let res = referencia.push(user);
        console.log("He insertado " + res.key);
        
    }
}
