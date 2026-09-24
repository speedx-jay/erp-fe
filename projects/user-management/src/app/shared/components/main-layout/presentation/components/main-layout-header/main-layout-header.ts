import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutService } from '../../../business/main-layout.service';

@Component({
  selector: 'app-main-layout-header',
  templateUrl: './main-layout-header.html',
  styleUrl: './main-layout-header.css',
})
export class MainLayoutHeader {
  private readonly router = inject(Router);
  private readonly mainLayoutService = inject(MainLayoutService);

  logout(): void {
    const confirmed = confirm('Do you want to logout?');

    if (!confirmed) {
      return;
    }

    var refreshToken = localStorage.getItem('refreshToken') ?? '';
    console.log('refreshToken' , refreshToken)
    this.mainLayoutService.logout(refreshToken).subscribe({
      next: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Failed to confirm revision:', error);
      },
    });
  }
}
