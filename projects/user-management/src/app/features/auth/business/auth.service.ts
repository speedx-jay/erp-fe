import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthDataAccess } from '../data/data-access/auth.data-access';
import { CreateAccountDomain, LoginDomain, LoginResponse, UserSessionDomain } from '../models/domain/auth.domain';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly dataAccess = inject(AuthDataAccess);

  login(data: LoginDomain): Observable<LoginResponse> {
    return this.dataAccess.login(data);
  }

  createAccount(data: CreateAccountDomain): Observable<LoginResponse> {
    return this.dataAccess.createAccount(data);
  }

  confirmEmail(publicId: string): Observable<string> {
    return this.dataAccess.confirmEmail(publicId);
  }

  getUserSession(): Observable<UserSessionDomain> {
    return this.dataAccess.getUserSession();
  }

  refreshToken(refreshToken: string): Observable<LoginResponse> {
    return this.dataAccess.refreshToken(refreshToken);
  }

  logout(refreshToken: string): Observable<string> {
    return this.dataAccess.logout(refreshToken);
  }
}
