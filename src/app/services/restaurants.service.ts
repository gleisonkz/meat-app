import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError, filter } from "rxjs/operators";
import { Restaurant } from "../models/restaurant";
import { environment } from "../../environments/environment";
import { ErrorHandler } from "../app.error-handler";

@Injectable({
  providedIn: "root",
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`${environment.meatApiUrl}/restaurants`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getRestaurantByID(restaurantID: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${environment.meatApiUrl}/restaurants/${restaurantID}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getMenuByRestaurantID(restaurantID: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${environment.meatApiUrl}/menu`).pipe(
      filter((restaurant) => restaurant.id === restaurantID),
      catchError(ErrorHandler.handleError)
    );
  }
}
