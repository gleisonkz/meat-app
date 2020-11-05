import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";

@Component({
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  host: { class: "order" },
})
export class OrderComponent implements OnInit {
  constructor() {}

  orderForm: FormGroup;

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      emailCheck: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required]),
      address2: new FormControl("", []),
      paymentMethod: new FormControl("", [Validators.required]),
    });
  }
}
