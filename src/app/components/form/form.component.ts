import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CaptchaComponent } from '../form/captcha/captcha.component';
import { ChecklistComponent } from '../form/checklist/checklist.component';
import { ComboboxComponent } from '../form/combobox/combobox.component';
import { FormFeildComponent } from '../form/form-feild/form-feild.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFeildComponent, ChecklistComponent, ComboboxComponent, CaptchaComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]*$/)]],
      apellidos: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]*$/)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(16), Validators.minLength(16)]],
      numero: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      opcion: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.error('Formulario inválido');
    }
  }
}
