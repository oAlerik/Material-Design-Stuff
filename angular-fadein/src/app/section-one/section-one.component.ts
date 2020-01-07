import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-section-one",
  templateUrl: "./section-one.component.html",
  styleUrls: ["./section-one.component.scss"],
  animations: [
    trigger("fadeInState", [
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateY(-5%)"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateY(0%)"
        })
      ),
      transition("show => hide", animate("750ms ease")),
      transition("hide => show", animate("750ms ease"))
    ])
  ]
})
export class SectionOneComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.toggle();
    }, 500);
  }

  get stateName() {
    return this.show ? "show" : "hide";
  }

  toggle() {
    this.show = !this.show;
  }
}
