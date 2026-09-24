import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthApi } from '../api/auth.api';
import { CreateAccountDomain, LoginDomain, LoginResponse } from '../../models/domain/auth.domain';

@Injectable({
  providedIn: 'root',
})
export class AuthDataAccess {
  private readonly api = inject(AuthApi);

  login(data: LoginDomain): Observable<LoginResponse> {
    return this.api.login(data);
  }

  createAccount(data: CreateAccountDomain): Observable<LoginResponse> {
    return this.api.createAccount(data);
  }

  confirmEmail(publicId: string): Observable<string> {
    return this.api.confirmEmail(publicId);
  }
}
