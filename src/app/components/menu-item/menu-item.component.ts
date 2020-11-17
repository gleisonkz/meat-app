import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "src/app/models/menu-item";
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "mt-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
  animations: [
    trigger("menuItemAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transform: "translateY(-20px)" }),
        animate("300ms 0s ease-in"),
      ]),
    ]),
  ],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  menuItemState = "ready";
  @Input() item: MenuItem;
  @Output() add = new EventEmitter<MenuItem>();

  ngOnInit() {}

  emitAddEvent() {
    this.add.emit(this.item);
  }
}
