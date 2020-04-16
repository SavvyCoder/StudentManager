import { Injectable } from "@angular/core";
import { Student, StudentClass } from "./student.model";
import { ClassMap } from "./class.model";

type StudentData = Student[] | [];

@Injectable({ providedIn: "root" })
export class StudentManagerStoreService {
  _studentData: StudentData = [];

  _studentDetails: Student | null = null;
  _query = "";

  _classData: ClassMap = {};

  _filteredStudents: StudentData | null = null;

  get studentData(): Student[] {
    return this._studentData;
  }

  set studentData(val: Student[]) {
    this._studentData = val;
  }

  set query(query: string) {
    this._query = query;
  }

  get query(): string {
    return this._query;
  }

  set studentDetails(student: Student | null) {
    this._studentDetails = student;
  }

  get studentDetails(): Student | null {
    return this._studentDetails;
  }

  set filteredStudents(students: Student[] | null) {
    this._filteredStudents = students;
  }

  get filteredStudents(): Student[] | null {
    return this._filteredStudents;
  }

  get classData(): ClassMap {
    return this._classData;
  }

  set classData(classes: ClassMap) {
    this._classData = classes;
  }

  initStudentData(studentData: Student[]) {
    this.studentData = studentData.map((student)=> (
      {
        ...student,
        average: this.calcStudentAverage(student.studentClasses)
      }
    ));
  }

  initClassData(classData: ClassMap) {
    this.classData = classData;
  }

  private sanitizeQuery = (query: string) => query.toLowerCase().replace(/\s/g, "");

  private calcStudentAverage = (studentClasses: StudentClass[]): number => 
    studentClasses.reduce((acc, _class, i, _classes) => {
      if(i === _classes.length-1){
        return acc = Number((acc/_classes.length).toFixed(2));
      }
      return acc += _class.grade;
    },0);
  

  makeSearch(query: string) {
    this.transitionDetails(null);

    //If no query clear filteredResults and set class query to default
    if (!query) {
      this.filteredStudents = null;
      this.query = "";
      return;
    }

    const sanitizedQuery = this.sanitizeQuery(query);

    if (this.sanitizeQuery(this.query) === sanitizedQuery) {
      return;
    }

    //Set class query so we can check isSame on new search
    this.query = query;

    //Sanitize query and filter results
    const filteredStudents = (this.studentData as StudentData).filter((student: Student, i) => {
      return `${student.first.toLowerCase()}${student.last.toLowerCase()}`.includes(sanitizedQuery);
    });
    if (filteredStudents.length === 0) {
      this.filteredStudents = null;
    } else {
      this.filteredStudents = filteredStudents;
    }
  }

  transitionDetails(details: Student | null) {
    this.studentDetails = details;
  }
}
