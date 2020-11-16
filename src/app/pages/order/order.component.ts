import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../models/cart-item";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { OrderService } from "../../services/order.service";
import { Order } from "../../models/order";
import { OrderItem } from "src/app/models/order-item";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
  host: { class: "order" },
})
export class OrderComponent implements OnInit {
  public orderForm: FormGroup;
  public orderItems$: Observable<CartItem[]>;
  public get existingCartItem() {
    return this.cartService.existingCartItem;
  }
  public deliveryCost: number = 8.0;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private cartService: ShoppingCartService,
    private orderService: OrderService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.orderForm = this.builder.group({
      name: this.builder.control("gleison", [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: this.builder.control("gleison@test.com", [
        Validators.required,
        Validators.email,
      ]),
      emailCheck: this.builder.control("gleison@test.com", [
        Validators.required,
        Validators.email,
      ]),
      address: this.builder.control("street D", [Validators.required]),
      number: this.builder.control("07", [Validators.required]),
      address2: this.builder.control("block 105", []),
      paymentMethod: this.builder.control("1", [Validators.required]),
    });

    this.orderItems$ = this.cartService.items$;
  }

  // ngOnInit(): void {
  //   this.orderForm = new FormGroup({
  //     name: new FormControl("gleison", [
  //       Validators.required,
  //       Validators.minLength(5),
  //     ]),
  //     email: new FormControl("gleison@test.com", [
  //       Validators.required,
  //       Validators.email,
  //     ]),
  //     emailCheck: new FormControl("gleison@test.com", [
  //       Validators.required,
  //       Validators.email,
  //     ]),
  //     address: new FormControl("street D", [Validators.required]),
  //     number: new FormControl("07", [Validators.required]),
  //     address2: new FormControl("block 105", []),
  //     paymentMethod: new FormControl("1", [Validators.required]),
  //   });

  //   this.orderItems$ = this.cartService.items$;
  // }

  getTotalItems(): number {
    return this.orderService.getTotalValue();
  }

  getOrderItems(): OrderItem[] {
    let orderItems: OrderItem[];
    this.subscriptions.push(
      this.orderItems$.subscribe(
        items =>
          (orderItems = items.map((c: CartItem) => ({
            quantity: c.quantity,
            menuItemID: c.menuItem.id,
          })))
      )
    );

    return orderItems;
  }

  submitOrder(order: Order): void {
    let orderID;
    order.orderItems = this.getOrderItems();
    this.orderService.postOrder(order).subscribe(c => {
      console.log(`Compra efetuada com sucesso! numero do pedido:${c.id}`);
      orderID = c.id;
      console.log(orderID);

      // this.orderService.clear();
    });

    // this.router.navigate(["/order-finished"], {
    //   state: orderID,
    // });
    this.router.navigate(["/order-finished"]);
  }
}
