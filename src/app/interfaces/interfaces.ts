export interface IUser {
    id: string,
    userName: string,
    password: string,
    isTeacher: boolean,
}

export interface ITeacher extends IUser {
    surname: string,
    name: string,
}

export interface IChild extends IUser {
    name: string,
    surname: string,
}

export interface IClassroom {
    id: string,
    name: string,
}

export interface IReport {
    id: string,
    description: string,
    childrenId: number, 
}

export interface IServerResponse{
    result: boolean,
    data: any
}

export interface IFormStruct {
    name: string,
    teacherId: string,
    classesIds: string[],
    fields: IFormField[]
}

export interface IFormField {
    label: string,
    requiered: boolean,
    type: "y/n" | "text" | "radio",
}

export interface IFirebaseResponse<T = any> {
    key: string,
    value: T
}

export interface IFormResponseField {
    type: "y/n" | "text" | "radio",
    response: string
}

export interface IFormResponse {
    idFormStruct: string,
    idChild: string,
    fields: IFormResponseField[]
}

