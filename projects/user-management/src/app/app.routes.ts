import { Routes } from '@angular/router';
import { AuthLayout } from './shared/components/auth-layout/presentation/pages/auth-layout/auth-layout';
import { Login } from './features/auth/presentation/pages/login/login';
import { Home } from './features/home/presentation/pages/home/home';
import { MainLayout } from './shared/components/main-layout/presentation/pages/main-layout/main-layout';
import { authGuard } from './core/guards/auth.guard';
import { Title } from '@angular/platform-browser';
import { CreateAccount } from './features/auth/presentation/pages/create-account/create-account';
import { ConfirmEmail } from './features/auth/presentation/pages/confirm-email/confirm-email';

export const routes: Routes = [
  // Authentication
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: Login,
        data: {
          title: 'ERP | Login',
        },
      },
      {
        path: 'create-account',
        component: CreateAccount,
        data: {
          title: 'ERP | Create Account',
        },
      },
      {
        path: 'confirm-email',
        component: ConfirmEmail,
        data: {
          title: 'ERP | Confirm Email',
        },
      },
    ],
  },

  // Main
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: Home,
        data: {
          title: 'ERP | Home',
        },
      },
    ],
  },
];
