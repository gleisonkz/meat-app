import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Review } from "src/app/models/review";
import { RestaurantsService } from "../../services/restaurants.service";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"],
  host: { class: "reviews" },
})
export class ReviewsComponent {
  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) {}

  // fakeItems: number[] = Array.from(Array(10));

  restaurantID: string;
  reviews: Review[];

  ngOnInit() {
    const restaurantID = this.route.parent.snapshot.url[1].path;
    this.restaurantsService
      .getReviewsByRestaurantID(restaurantID)
      .subscribe((reviewsItems) => {
        console.log(reviewsItems);

        this.reviews = reviewsItems;
      });
  }
}
