import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from './homepage/homepage.component';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, InfoCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
