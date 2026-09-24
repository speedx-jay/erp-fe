import { Component, inject } from '@angular/core';
import { AknErpLayoutMain, Modal } from 'user-management-ui';
import { MainLayoutFooter } from '../../components/main-layout-footer/main-layout-footer';
import { MainLayoutHeader } from '../../components/main-layout-header/main-layout-header';
import { Router } from '@angular/router';
import { MainLayoutService } from '../../../business/main-layout.service';

@Component({
  selector: 'app-main-layout',
  imports: [AknErpLayoutMain, Modal, MainLayoutHeader],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private readonly router = inject(Router);
  private readonly mainLayoutService = inject(MainLayoutService);
  isOpen = false;

  profileSettings(): void {
    this.isOpen = true;
  }

  closeAppMenu(): void {
    this.isOpen = false;
  }

  logout(): void {
    const confirmed = confirm('Do you want to logout?');

    if (!confirmed) {
      return;
    }

    var refreshToken = localStorage.getItem('refreshToken') ?? '';
    console.log('refreshToken', refreshToken);
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
