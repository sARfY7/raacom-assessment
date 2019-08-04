import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() type: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() msg: string = "";
  input_value = "";

  constructor() {}

  ngOnInit() {}

  validateInput() {
    if (this.input_value == "") {
      this.msg = "Empty Field!";
      return;
    } else {
      this.msg = "";
    }
    if (this.type == "email") {
      if (!this.input_value.includes("@")) {
        this.msg = "Invalid Email!";
      } else {
        this.msg = "";
      }
    }
  }
}
