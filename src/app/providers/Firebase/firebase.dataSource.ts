import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { IFirebaseResponse } from 'src/app/interfaces/interfaces';


interface IProps {
    action: "GET_COL" | "CREATE" | "PUT" | "DELETE" | "GET_ONE",
    path: string,
    params?: any
}

export default class FirebaseSrc {
    constructor(private _db: AngularFireDatabase) {}

    async makeRequest({action, path, params}: IProps): Promise<IFirebaseResponse[] | string> {
        if((action == "CREATE" || action == "PUT") && params == undefined) throw "BadRequest"

        let ref = this._db.database.ref(path)
        let result

        switch(action) {
            case "CREATE":
                result = await ref.push(params)
                return result.key
            case "DELETE":
                await ref.remove()
                return ""
            case "GET_COL":
                result = []
                let paramQuery = params ? Object.keys(params)[0] : undefined
                const funcSnap = snap => {
                    snap.forEach(element => {
                        result.push({
                            value: element.val(),
                            key: element.key
                        })
                    })
                }

                paramQuery ? 
                    await ref.orderByChild(paramQuery).equalTo(params[paramQuery]).once("value", funcSnap) : 
                    await ref.once("value", funcSnap)
                return result
            case "GET_ONE":
                await ref.once("value", snap => result = {value: snap.val(), key: snap.key})
                return [result]
            case "PUT": 
                await ref.update(params)
                return ""
        }
    }
}