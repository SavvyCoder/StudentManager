import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./loader/loader.component";
import { SearchComponent } from "./search/search.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailsComponent } from "./student_details/student_details.component";
import { MaterialModule } from "../material.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [LoaderComponent, SearchComponent,StudentComponent, StudentDetailsComponent],
  exports: [LoaderComponent, SearchComponent, StudentComponent, StudentDetailsComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "fill",
      },
    },
  ],
})
export class SharedModule {}
