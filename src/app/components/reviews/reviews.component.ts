import { Component } from "@angular/core";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"],
  host: { class: "reviews" },
})
export class ReviewsComponent {
  constructor() {}

  fakeItems: number[] = Array.from(Array(10));
}
