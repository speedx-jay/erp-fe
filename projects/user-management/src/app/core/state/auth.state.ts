import { Injectable, signal } from '@angular/core';

import {UserSessionDomain } from '../../features/auth/models/domain/auth.domain';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  private readonly userSession = signal<UserSessionDomain | null>(null);
  readonly session = this.userSession.asReadonly();

  setUserSession(session: UserSessionDomain): void {
    this.userSession.set(session);
  }
  clearUserSession(): void {
    this.userSession.set(null);
  }
}
