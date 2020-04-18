import { Injectable } from "@angular/core";
import ClassroomService from 'src/app/services/classroom.service';
import {IClassroom, IServerResponse} from '../../interfaces/interfaces'
import ApiRestSrc from './apiRest.dataSource';


@Injectable()
export default class ClassroomsProvider extends ClassroomService {
    readonly classroomsPath = "classrooms"
    readonly classTeacherPath = `${this.classroomsPath}/teachers`
    readonly classChildrenPath = `${this.classroomsPath}/children`

    constructor(private _source: ApiRestSrc) {
        super()
    }

    async getClassroomsByTeacher(idTeacher: string): Promise<IClassroom[]> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "GET",
                params: {
                    idTeacher: idTeacher
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToClass(element))
        else return []
    }
    
    async addClassroom(classroom: IClassroom): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "POST",
                params: {
                    Name: classroom.name
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    async getClassrooms(): Promise<IClassroom[]> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "GET"
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToClass(element))
        else return []
    }

    async addClassroomToTeacher(idClass: string, idTeacher: string): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classTeacherPath,
                method: "POST",
                params: {
                    ClassroomId: idClass,
                    TeacherId: idTeacher
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    async addChildrenToClassroom(idClass: string, idChild: string): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classChildrenPath,
                method: "POST",
                params: {
                    ChildId: +idClass,
                    ClassroomId: +idChild
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    fromResponseToClass(response: any): IClassroom {
        return {
            id: response.Id,
            name: response.Name
        }
    }

    async deleteChildFromClassroom(idClass: string, idChild: string): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classChildrenPath,
                method: "DELETE",
                params: {
                    ChildId: +idChild,
                    ClassroomId: +idClass
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }
}