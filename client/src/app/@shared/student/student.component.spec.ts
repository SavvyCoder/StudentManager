import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CoreModule } from "@core";
import { SharedModule } from "@shared";
import { StudentComponent } from "./student.component";
import { Student } from "@core/student.model";

describe("Student Component", () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let student: Student; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
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
