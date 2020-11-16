import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class OrderGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (sessionStorage.getItem("orderID") === null) {
      this.router.navigateByUrl("/restaurants");
      return false;
    }
    return true;
  }
}
