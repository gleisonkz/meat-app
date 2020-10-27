import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-toggle-theme",
  templateUrl: "./toggle-theme.component.html",
  styleUrls: ["./toggle-theme.component.scss"],
})
export class ToggleThemeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeTheme(): void {
    document.documentElement.classList.toggle("dark-mode");
  }
}
