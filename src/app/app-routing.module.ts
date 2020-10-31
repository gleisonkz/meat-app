import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { RestaurantDetailComponent } from "./pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
