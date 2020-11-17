import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppRoutingModule, ROUTES } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/footer/footer.component";
import { ToggleThemeComponent } from "./components/toggle-theme/toggle-theme.component";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { HttpClientModule } from "@angular/common/http";
import { RestaurantDetailComponent } from "./pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { RestaurantRatingComponent } from "./components/restaurant-rating/restaurant-rating.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { OrderComponent } from "./pages/order/order.component";
import { MaterialModule } from "./modules/material/material.module";

import { ReactiveFormsModule } from "@angular/forms";
import { ShowValidationDirective } from "./directives/show-validation.directive";
import { ErrorStateMatcher } from "@angular/material/core";
import { CustomErrorStateMatcher } from "./shared/classes/custom-error-state-matcher";
import { InputComponent } from "./components/input/input.component";
import { OrderItemComponent } from "./components/order-item/order-item.component";
import { DeliveryCostsComponent } from "./components/delivery-costs/delivery-costs.component";
import { OrderFinishedComponent } from "./pages/order-finished/order-finished.component";
import { RatingComponent } from "./components/rating/rating.component";
import { OrderGuard } from "./guards/order.guard";
import { PreloadAllModules, RouterModule } from "@angular/router";
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToggleThemeComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RestaurantRatingComponent,
    ReviewsComponent,
    OrderComponent,
    ShowValidationDirective,
    InputComponent,
    OrderItemComponent,
    DeliveryCostsComponent,
    OrderFinishedComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-PT" },
    { provide: ErrorStateMatcher, useValue: new CustomErrorStateMatcher() },
    OrderGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
