import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { CoreModule, Student } from "@core";
import { SharedModule } from "@shared";
import { StudentDetailsComponent } from "./student_details.component";

describe("Student Component", () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;
  let student: Student;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    student = {
      email: "banana",
      first: "banana",
      last: "banana",
      studentClasses: [{
        id: 1,
        grade: 1
      }]
    };
    component.student = student; 
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
