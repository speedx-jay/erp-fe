import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../business/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  isOpen = true;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
     const rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedEmail) {
      this.form.patchValue({
        email: rememberedEmail,
        password: rememberedPassword,
        rememberMe: true,
      });
    }
  }

  closeModal(): void {
    this.isOpen = false;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password, rememberMe } = this.form.value;

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
    }

    console.log('data:', this.form.value);

    this.authService.login(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        alert('login successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Failed to confirm revision:', error);
      },
    });
  }
}
