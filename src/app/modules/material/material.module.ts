import { MatRadioModule } from "@angular/material/radio";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatInputModule, MatRadioModule, MatSnackBarModule],
})
export class MaterialModule {}
