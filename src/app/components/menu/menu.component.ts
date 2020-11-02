import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../../models/menu-item";
import { RestaurantsService } from "../../services/restaurants.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  restaurantID: string;
  items: MenuItem[];

  ngOnInit() {
    const restaurantID = this.route.parent.snapshot.url[1].path;
    this.restaurantsService
      .getMenuByRestaurantID(restaurantID)
      .subscribe((menuItems) => {
        this.items = menuItems;
      });
  }
}
