import { Component, OnInit } from "@angular/core";
import { Animations } from "./animations";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
  animations: [Animations.titleFade, Animations.textFade, Animations.imageFade]
})
export class HomepageComponent implements OnInit {
  show = false;
  show2 = false;
  show3 = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = !this.show;
    }, 250);

    setTimeout(() => {
      this.show2 = !this.show2;
    }, 450);

    setTimeout(() => {
      this.show3 = !this.show3;
    }, 650);
  }

  get stateName() {
    return this.show ? "show" : "hide";
  }

  get stateName2() {
    return this.show2 ? "show" : "hide";
  }

  get stateName3() {
    return this.show3 ? "show" : "hide";
  }
}
