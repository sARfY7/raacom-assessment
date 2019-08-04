import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  show_modal: boolean = true;

  constructor() {}

  ngOnInit() {}

  modal() {
    this.show_modal = this.show_modal ? false : true;
  }
}
