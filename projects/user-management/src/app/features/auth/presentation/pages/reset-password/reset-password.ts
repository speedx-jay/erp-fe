import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../business/auth.service';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  private readonly formBuilder = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  protected isLoading = signal<boolean | null>(null);

  private readonly resetToken = this.activatedRoute.snapshot.queryParamMap.get('token') ?? '';

  readonly form = this.formBuilder.nonNullable.group(
    {
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ],
      ],
    },
    {
      validators: this.passwordMatchValidator,
    },
  );

  private passwordMatchValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!newPassword || !confirmPassword) {
      return null;
    }

    return newPassword === confirmPassword
      ? null
      : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.resetToken) {
      alert('Invalid or missing reset token.');
      return;
    }

    const { newPassword } = this.form.getRawValue();

    this.authService.resetPassword(this.resetToken,newPassword)
      .subscribe({
        next: () => {
          alert('Password reset successfully.');

          this.router.navigate(['/auth/login']);
        },
        error: () => {
          alert('Invalid or expired reset token.');
        },
      });
  }
}