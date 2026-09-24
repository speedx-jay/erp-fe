import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthDataAccess } from '../data/data-access/auth.data-access';
import { CreateAccountDomain, LoginDomain, LoginResponse } from '../models/domain/auth.domain';

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
}
