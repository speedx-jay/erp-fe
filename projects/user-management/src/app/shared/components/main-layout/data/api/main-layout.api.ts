import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainLayoutApi {
  private readonly http = inject(HttpClient);

  private readonly endpoint = `${environment.userManagementApi.baseUrl}`;

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Api-Key': environment.userManagementApi.apiKey,
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
