import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateAccountDomain, LoginDomain, LoginResponse } from '../../models/domain/auth.domain';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.userManagementApi.baseUrl}`;

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Api-Key': environment.userManagementApi.apiKey,
    });
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
}
