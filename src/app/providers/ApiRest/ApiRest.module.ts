import { NgModule } from "@angular/core";
import UserService from 'src/app/services/user.service';
import UserProvider from './user.provider';
import ApiRestSrc from './apiRest.dataSource';
import ReportsProvider from './reports.provider';
import ReportsService from 'src/app/services/reports.service';
import ClassroomService from 'src/app/services/classroom.service';
import ClassroomsProvider from './classroom.provider';

@NgModule({
    providers: [
        ApiRestSrc,
        {provide: UserService, useClass: UserProvider},
        {provide: ReportsService, useClass: ReportsProvider},
        {provide: ClassroomService, useClass: ClassroomsProvider}

    ]
})
export default class ApiRestServicesModule {}