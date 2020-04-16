import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { CoreModule } from "@core";
import { SharedModule } from "@shared";
import { HomeComponent } from "./home.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { StudentService } from "@core/student.service";
import { ClassService } from "@core/class.service";
import { StudentManagerStoreService } from "@core/student-manager-store.service";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule, HttpClientTestingModule, NoopAnimationsModule],
      declarations: [HomeComponent],
      providers: [StudentManagerStoreService, StudentService, ClassService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
