import { Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";

import { StudentService } from "@core/student.service"; 
import { ClassService } from "@core/class.service";
import { Student } from "@core/student.model";
import { ClassMap } from "@core/class.model";
import { StudentManagerStoreService } from "@core/student-manager-store.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLoading = false;

  constructor(private studentService: StudentService, private classService: ClassService, public managerStore: StudentManagerStoreService) {}
  ngOnInit() {
    this.isLoading = true;
    //We get fresh student/class data on home page load/mount/route (we can add a StoreService i.e. (managerStore.hasSetupData(): boolean) condition if we want to prevent this or we can add these calls to App scope)
    this.studentService.getAllStudentData({}).
    subscribe((studentData: Student[]) => {
      this.managerStore.initStudentData(studentData); 
      this.classService.getAllClassData({}).pipe(
        finalize(() => {
          this.isLoading = false; 
        })
      ).subscribe((classData: ClassMap) => {
        this.managerStore.initClassData(classData);
      });
    });
  }
}
