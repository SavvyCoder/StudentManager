import { Type } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CoreModule } from "@core";
import { ClassService, AllClassRes } from "./class.service";
import { ClassMap } from "./class.model";



describe("Student Service", () => {
  let classService: ClassService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [ClassService],
    });

    classService = TestBed.inject(ClassService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe("get all classes", () => {
    it("should return all classes in DB", () => {
      // Arrange
      const mockStatus = "ok";

      // Act
      const classesSubscription = classService.getAllClassData({}, true);

      // Assert
      classesSubscription.subscribe((res: AllClassRes) => {
        expect(res.status).toEqual(mockStatus);
      });
      httpMock.expectOne({}).flush(mockStatus);
    });
  });
});
