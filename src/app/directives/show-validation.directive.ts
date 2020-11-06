import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { Subscription } from "rxjs";

@Directive({
  selector: "[mtShowValidation]",
})
export class ShowValidationDirective implements AfterContentInit, OnDestroy {
  @Input("mtShowValidation") controlName: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    private parent: ControlContainer
  ) {}

  ngAfterContentInit(): void {
    const group = this.parent.control as FormGroup;
    const control = group.controls[this.controlName] as FormControl;

    this.subscriptions.push(
      control.statusChanges.subscribe(c => {
        const errorMessage = this.checkValidations(control);
        this.setInnerHTML(errorMessage);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private setInnerHTML(html: string) {
    this.elementRef.nativeElement.innerHTML = html;
  }

  private checkValidations(control: AbstractControl): string {
    return (
      ArrayValidation.find(c => control.hasError(c.key))?.value(control) || ""
    );
  }
}

export const ArrayValidation = [
  // {
  //   key: "required",
  //   value: (control: AbstractControl) => {
  //     const formGroup = control.parent.controls;
  //     const controlName = Object.keys(formGroup).find(
  //       name => control === formGroup[name]
  //     );
  //     return `${controlName} <strong>is required</strong>`;
  //   },
  // },
  {
    key: "required",
    value: (control: AbstractControl) =>
      "this field is <strong>required</strong>",
  },
  {
    key: "minlength",
    value: (control: AbstractControl) => "min of <strong>5 characters</strong>",
  },
];
