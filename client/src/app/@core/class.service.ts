import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ClassMap } from "./class.model";

const routes = {
  classData: (c: ClassDataContext) => "/api/classes",
};

//We don't really need a fancy context for this simple app, if we want to extend functionality in the future it will be nice to have this boilerplate to fetch specific records
export interface ClassDataContext {
  // class id
  id?: number;
}

export interface AllClassRes {
  status: string;
  data: ClassMap;
}

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private httpClient: HttpClient) {}

  getAllClassData(context: ClassDataContext, isStatus?: boolean): Observable<ClassMap | AllClassRes> {
    return this.httpClient.get(routes.classData(context)).pipe(
      map((body: any) => {
        if(isStatus){
          return body;
        }
        return body.data;}),
      catchError(() => of("Error, could not fetch class map data"))
    );
  }
}
