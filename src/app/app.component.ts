import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { ToggleThemeService } from "./services/toggle-theme.service";
import { Subject, Subscription } from "rxjs";

@Component({
  selector: "mt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
      console.log("Subscribe");
      this.documentRef.documentElement.classList.toggle("dark-mode");
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
