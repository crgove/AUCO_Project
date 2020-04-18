import {Injectable} from '@angular/core';
import { ITeacher, IChild, IUser } from '../interfaces/interfaces';

@Injectable()
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

}
