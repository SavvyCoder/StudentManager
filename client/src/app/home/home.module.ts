import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { CoreModule } from "@core";
import { SharedModule } from "@shared";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, NoopAnimationsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
