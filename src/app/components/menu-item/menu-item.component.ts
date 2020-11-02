import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "src/app/models/menu-item";

@Component({
  selector: "mt-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  @Input() item: MenuItem;
  @Output() add = new EventEmitter<MenuItem>();

  ngOnInit() {}

  emitAddEvent() {
    this.add.emit(this.item);
  }
}
