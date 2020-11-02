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
  // = [
  //   {
  //     id: "cup-cake",
  //     imagePath: "assets/img/foods/cupcake.png",
  //     name: "Cup Cake",
  //     description: "Cup Cake recheado de Doce de Leite",
  //     price: 8.7,
  //     restaurantId: "bread-bakery",
  //   },
  //   {
  //     id: "donut",
  //     imagePath: "assets/img/foods/donut.png",
  //     name: "Donut",
  //     description: "Coberto com chantilly",
  //     price: 2.5,
  //     restaurantId: "bread-bakery",
  //   },
  //   {
  //     id: "bread",
  //     imagePath: "assets/img/foods/bread.png",
  //     name: "Pão Artesanal Italiano",
  //     description: "Pão artesanal com queijos italianos",
  //     price: 15.9,
  //     restaurantId: "bread-bakery",
  //   },
  //   {
  //     id: "burger",
  //     imagePath: "assets/img/foods/burger.png",
  //     name: "Classic Burger",
  //     description: "O clássico. Não tem como errar.",
  //     price: 18.5,
  //     restaurantId: "burger-house",
  //   },
  // ];

  ngOnInit() {
    const restaurantID = this.route.parent.snapshot.url[1].path;
    this.restaurantsService
      .getMenuByRestaurantID(restaurantID)
      .subscribe((menuItems) => {
        this.items = menuItems;
      });
  }
}
