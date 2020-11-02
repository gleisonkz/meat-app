import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Restaurant } from "src/app/models/restaurant";
import { RestaurantsService } from "../../services/restaurants.service";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
  styleUrls: ["./restaurant-detail.component.scss"],
})
export class RestaurantDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {}
  restaurant: Restaurant;

  ngOnInit() {
    const restaurantID = this.route.snapshot.params.id;
    this.restaurantService
      .getRestaurantByID(restaurantID)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
