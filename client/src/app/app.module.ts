import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { environment } from "@env/environment";
import { CoreModule } from "@core";
import { SharedModule } from "@shared";
import { AuthModule } from "@app/auth";
import { HomeModule } from "./home/home.module";
import { ShellModule } from "./shell/shell.module";
import { AboutModule } from "./about/about.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { StudentService } from "@core/student.service";
import { ClassService } from "@core/class.service";

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("./ngsw-worker.js", { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    ReactiveFormsModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    StudentService,
    ClassService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "fill",
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
