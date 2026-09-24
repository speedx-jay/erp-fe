import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { MainLayoutDataAccess } from '../data/data-access/main-layout.data-access';

@Injectable({
  providedIn: 'root',
})
export class MainLayoutService {
  private readonly dataAccess = inject(MainLayoutDataAccess);

  logout(refreshToken: string): Observable<string> {
    return this.dataAccess.logout(refreshToken);
  }
}
