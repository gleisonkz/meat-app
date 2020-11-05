import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mt-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() label: string;
  @Input() formControlName: string;
  @Input() placeHolder: string;
  @Input() formGroup: FormGroup;

  get isValid() {
    return this.formGroup.controls[this.formControlName].valid;
  }

  ngOnInit(): void {}
}
