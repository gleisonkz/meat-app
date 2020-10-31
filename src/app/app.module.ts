import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/footer/footer.component";
import { ToggleThemeComponent } from "./components/toggle-theme/toggle-theme.component";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { AboutComponent } from "./pages/about/about.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { HttpClientModule } from "@angular/common/http";
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RestaurantRatingComponent } from './components/restaurant-rating/restaurant-rating.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
