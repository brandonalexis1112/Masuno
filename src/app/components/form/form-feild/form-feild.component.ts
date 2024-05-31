import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-form-feild',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-feild.component.html',
  styleUrl: './form-feild.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFeildComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormFeildComponent),
      multi: true,
    },
  ],
})
export class FormFeildComponent implements ControlValueAccessor, Validator {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() maxLength!: number;
  @Input() pattern!: string;

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onInput(value: string): void {
    this.writeValue(value);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (this.type === 'text' && value.length > this.maxLength) {
      return { maxLength: true };
    }
    if (this.type === 'email' && value.length !== 16) {
      return { length: true };
    }
    if (this.type === 'tel' && value.length !== 9) {
      return { length: true };
    }
    if (this.pattern && !new RegExp(this.pattern).test(value)) {
      return { pattern: true };
    }
    return null;
  }
}
