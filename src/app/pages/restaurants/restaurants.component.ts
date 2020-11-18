import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Restaurant } from "src/app/models/restaurant";
import { RestaurantsService } from "../../services/restaurants.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.scss"],
  animations: [
    trigger("toggleSearch", [
      state(
        "false",
        style({
          opacity: 0,
          maxHeight: 0,
        })
      ),
      state(
        "true",
        style({
          opacity: 1,
          maxHeight: "initial",
        })
      ),
      transition("* => *", animate(".2s 0s ease-out")),
    ]),
  ],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  searchForm: FormGroup;
  searchControl: FormControl;
  searchBarState = false;
  searchTerm = "";

  constructor(private restaurantesService: RestaurantsService) {}

  ngOnInit() {
    this.searchControl = new FormControl("");
    this.searchForm = new FormGroup({ search: this.searchControl });
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm =>
          this.restaurantesService.getRestaurants(searchTerm)
        )
      )
      .subscribe(restaurants => (this.restaurants = restaurants));
    this.searchControl.reset("");
  }
}
