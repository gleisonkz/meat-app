import { Component, OnInit } from "@angular/core";
import { Restaurant } from "src/app/models/restaurant";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
    {
      id: "",
      name: "Tasty Treats",
      category: "Bakery",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/tasty.png",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
