
//nuevo para que solor recoga el id del usuario (su DNI), en este caso del niño
export interface IUser{
    id: string
}

export interface IUserManager{
    id: string
}

export interface IServerResponse{
    result: boolean,
    data: any
}


//cambio
export interface IFormStruct {
    name: string,
    id:string,
    fields: IFormField[]
}

//cambio
export interface IFormResponse{
    idFormStruct: string,
    idChild: string,
    fields: IFormResponseField[]
}

export interface IFormResponseField {
    type: "y/n" | "text" | "radio",
    response: string
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



