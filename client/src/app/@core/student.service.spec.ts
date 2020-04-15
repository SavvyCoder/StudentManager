import { Type } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CoreModule } from "@core";
import { StudentService, AllStudentRes } from "./student.service";
import { Student } from "./student.model";
import { Observable, PartialObserver } from "rxjs";



describe("Student Service", () => {
  let studentService: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [StudentService],
    });

    studentService = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe("get all students", () => {
    it("should return all students in DB", () => {
      // Arrange
      const mockStatus = "ok";

      // Act
      const studentsSubscription = studentService.getAllStudentData({}, true);

      // Assert
      studentsSubscription.subscribe((res: AllStudentRes) => {
        expect(res.status).toEqual(mockStatus);
      });
      httpMock.expectOne({}).flush(mockStatus);
    });
  });
});
