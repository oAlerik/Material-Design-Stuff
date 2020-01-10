import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Animations } from "./animations";
import { DialogTestComponent } from "../dialog-test/dialog-test.component";

@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
  styleUrls: ["./more-info.component.scss"],
  animations: [Animations.fadeIn]
})
export class MoreInfoComponent implements OnInit {
  show = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(() => {
      this.show = !this.show;
    }, 250);
  }

  get stateName() {
    return this.show ? "show" : "hide";
  }

  openDialog() {
    this.dialog.open(DialogTestComponent);
  }
}
