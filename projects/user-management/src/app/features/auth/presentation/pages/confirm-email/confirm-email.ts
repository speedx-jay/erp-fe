import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AuthService } from '../../../business/auth.service';

@Component({
  selector: 'app-confirm-email',
  imports: [ReactiveFormsModule],
  templateUrl: './confirm-email.html',
  styleUrl: './confirm-email.css',
})
export class ConfirmEmail implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);

  publicId = '';

  ngOnInit(): void {
    this.publicId = this.route.snapshot.queryParamMap.get('publicId') ?? '';
    console.log('Public ID:', this.publicId);

    this.authService.confirmEmail(this.publicId).subscribe({
      next: () => {
        alert('confirm email successfully!');
      },
      error: (error) => {
        console.error('Failed to confirm revision:', error);
      },
    });
  }
}
