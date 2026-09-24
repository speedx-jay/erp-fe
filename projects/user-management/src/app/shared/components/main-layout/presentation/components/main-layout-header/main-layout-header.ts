import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutService } from '../../../business/main-layout.service';
import { IconUser, IconErpLogo } from 'user-management-ui';
import { AuthState } from '../../../../../../core/state/auth.state';
import { UserSessionDomain } from '../../../../../../features/auth/models/domain/auth.domain';

@Component({
  selector: 'app-main-layout-header',
  standalone: true,
  imports: [IconUser, IconErpLogo],
  templateUrl: './main-layout-header.html',
  styleUrl: './main-layout-header.css',
})
export class MainLayoutHeader {
  protected readonly authState = inject(AuthState);
  protected readonly session = this.authState.session;

  @Output() openModalSettings = new EventEmitter<void>();

  profileSettings(): void {
    this.openModalSettings.emit();
  }
}
