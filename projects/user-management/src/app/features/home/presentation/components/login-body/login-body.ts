import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-body',
  imports: [ReactiveFormsModule],
  templateUrl: './login-body.html',
  styleUrl: './login-body.css',
})
export class LoginBody {
  readonly fb = inject(FormBuilder);
  passwordVisible = false;
  @Output() closeModal = new EventEmitter<void>();

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSignIn(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.getRawValue());
    this.closeModal.emit();
  }

  get passwordHidden(): boolean {
    return !this.passwordVisible;
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
