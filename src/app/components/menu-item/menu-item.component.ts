import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "src/app/models/menu-item";

@Component({
  selector: "mt-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  @Input() item: MenuItem;

  ngOnInit() {}
}
