import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { ToggleThemeService } from "./services/toggle-theme.service";
import { Subscription } from "rxjs";
import { RouterOutlet } from "@angular/router";
import { fadeAnimation } from "./animations/fade.animation";

@Component({
  selector: "mt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  title = "meat-app";
  subscription: Subscription;

  constructor(
    private toggleThemeService: ToggleThemeService,
    @Inject(DOCUMENT) private documentRef: Document
  ) {}

  ngOnInit(): void {
    this.subscription = this.toggleThemeService.changeTheme.subscribe(() => {
      this.documentRef.documentElement.classList.toggle("dark-mode");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }
}
