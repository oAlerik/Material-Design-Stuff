import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { InfoCardComponent } from "./info-card/info-card.component";
import { MoreInfoComponent } from "./more-info/more-info.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "info-card", component: InfoCardComponent },
  { path: "more-info", component: MoreInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
