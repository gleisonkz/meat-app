import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantDetailComponent } from "./pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { OrderComponent } from "./pages/order/order.component";
import { OrderFinishedComponent } from "./pages/order-finished/order-finished.component";
import { OrderGuard } from "./guards/order.guard";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const ROUTES: Routes = [
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
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then(m => m.AboutModule),
  },
  { path: "order", component: OrderComponent },
  {
    path: "order-finished",
    component: OrderFinishedComponent,
    canActivate: [OrderGuard],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
