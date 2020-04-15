import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Student } from "./student.model";

const routes = {
  studentData: (s: StudentDataContext) => "/api/students",
};

//if we want to extend functionality in the future it will be nice to have this boilerplate to fetch specific records
export interface StudentDataContext {
  // The student's id
  id?: number;
}

export interface AllStudentRes{
  status: string;
  data: Student[];
}

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getAllStudentData(context: StudentDataContext, isStatus?: boolean): Observable<Student[] | AllStudentRes> {
    return this.httpClient.get(routes.studentData(context)).pipe(
      map((body: any) => {
        if(isStatus){
          return body; 
        }
        return body.data;}),
      catchError(() => of("Error, could not fetch student data"))
    );
  }
}
