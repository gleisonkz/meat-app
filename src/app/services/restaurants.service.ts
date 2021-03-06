import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError, filter, tap } from "rxjs/operators";
import { Restaurant } from "../models/restaurant";
import { environment } from "../../environments/environment";
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../models/menu-item";
import { Review } from "../models/review";

@Injectable({
  providedIn: "root",
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants(searchTerm = ""): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`${environment.meatApiUrl}/restaurants`, {
        params: { q: searchTerm },
      })
      .pipe(catchError(ErrorHandler.handleError));
  }

  getRestaurantByID(restaurantID: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${environment.meatApiUrl}/restaurants/${restaurantID}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getMenuByRestaurantID(restaurantID: string): Observable<MenuItem[]> {
    return this.http
      .get<MenuItem[]>(
        `${environment.meatApiUrl}/restaurants/${restaurantID}/menu`
      )
      .pipe(catchError(ErrorHandler.handleError));
  }

  getReviewsByRestaurantID(restaurantID: string): Observable<Review[]> {
    return this.http
      .get<Review[]>(
        `${environment.meatApiUrl}/restaurants/${restaurantID}/reviews`
      )
      .pipe(catchError(ErrorHandler.handleError));
  }
}
