import { Component } from '@angular/core';
import { AknErpLayoutAuth } from 'user-management-ui';
import { AuthLayoutHeader } from '../../components/auth-layout-header/auth-layout-header';
import { AuthLayoutFooter } from '../../components/auth-layout-footer/auth-layout-footer';

@Component({
  selector: 'app-auth-layout',
  imports: [AknErpLayoutAuth, AuthLayoutHeader, AuthLayoutFooter],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {}