import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart-item";
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  host: { class: "order" },
})
export class OrderComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}

  orderForm: FormGroup;
  orderItems$: Observable<CartItem[]>;

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

    this.orderItems$ = this.cartService.items$;
  }
}
