import { Component, OnInit } from "@angular/core";
import { Animations } from "./animations";

@Component({
  selector: "app-info-card",
  templateUrl: "./info-card.component.html",
  styleUrls: ["./info-card.component.scss"],
  animations: [Animations.contentFade]
})
export class InfoCardComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = !this.show;
    }, 250);
  }

  get stateName() {
    return this.show ? "show" : "hide";
  }
}
