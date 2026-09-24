import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { AuthService } from './features/auth/business/auth.service';
import { authInterceptor } from './core/interceptors/401-unauthorized.interceptors';
import { AuthState } from './core/state/auth.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAppInitializer(async () => {
      const authService = inject(AuthService);
      const authState = inject(AuthState);

      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        return;
      }

      try {
        const session = await firstValueFrom(authService.getUserSession());
        authState.setUserSession(session);
      } catch (error) {
        console.log('Session initialization failed:', error);
        authState.clearUserSession();
      }
    }),
  ],
};
