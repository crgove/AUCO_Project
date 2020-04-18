import {Injectable} from '@angular/core';
import { IReport } from '../interfaces/interfaces';

@Injectable()
export default abstract class ReportsService {
    abstract getReportsByTeacher(idTeacher: string): Promise<IReport[]>;
    abstract reportByChild(childId: string): Promise<IReport[]>;
    abstract addReport(report: IReport): Promise<void>;
}