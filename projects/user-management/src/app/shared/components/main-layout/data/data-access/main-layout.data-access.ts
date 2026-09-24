import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MainLayoutApi } from '../api/main-layout.api';

@Injectable({
  providedIn: 'root',
})
export class MainLayoutDataAccess {
  private readonly api = inject(MainLayoutApi);

  logout(refreshToken: string): Observable<string> {
    return this.api.logout(refreshToken);
  }
}
