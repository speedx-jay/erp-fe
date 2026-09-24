import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CreateAccountDomain, LoginDomain, LoginResponse, UserSessionDomain } from '../../models/domain/auth.domain';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.userManagementApi.baseUrl}`;

  private getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem('accessToken');
    return new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
  }

  getUserSession(): Observable<UserSessionDomain> {
    return this.http
      .get<UserSessionDomain>(`${this.endpoint}api/Users/get-user-session`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((response) => {
          console.log('get-user-session:', response);
        }),
      );
  }

  login(data: LoginDomain): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}api/Users/login`, data);
  }

  createAccount(data: CreateAccountDomain): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}api/Users/create-user`, data);
  }

  confirmEmail(publicId: string): Observable<string> {
    const params = new HttpParams().set('publicId', publicId);

    return this.http.put(`${this.endpoint}api/Users/confirm-email`, null, {
      params,
      responseType: 'text',
    });
  }

  refreshToken(refreshToken: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.endpoint}api/Users/refresh-token`, {
      refreshToken,
    });
  }

  logout(refreshToken: string): Observable<string> {
    return this.http.post(
      `${this.endpoint}api/Users/logout`,
      {
        refreshToken,
      },
      {
        responseType: 'text',
      },
    );
  }
}
