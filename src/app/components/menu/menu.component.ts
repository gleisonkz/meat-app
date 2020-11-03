import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../../models/menu-item";
import { RestaurantsService } from "../../services/restaurants.service";
import { ActivatedRoute } from "@angular/router";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(
    private restaurantsService: RestaurantsService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) {}

  restaurantID: string;
  items: MenuItem[];

  ngOnInit() {
    const restaurantID = this.route.parent.snapshot.params.id;
    this.restaurantsService
      .getMenuByRestaurantID(restaurantID)
      .subscribe((menuItems) => {
        this.items = menuItems;
      });
  }

  addToCart(menuItem: MenuItem): void {
    this.shoppingCartService.addItem(menuItem);
  }
}
