import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "mt-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent
  implements OnInit, AfterContentInit, ControlValueAccessor {
  constructor() {}

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  @ContentChild(FormControlName) control: FormControlName;
  input: FormControlName;
  @Input() label: string;
  @Input() placeHolder: string;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.input = this.control;

    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com a diretiva FormControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
