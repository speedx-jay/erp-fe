import { Component } from '@angular/core';
import { AknErpLayoutAuth } from 'user-management-ui';
import { MainLayoutHeader } from '../../components/main-layout-header/main-layout-header';
import { AuthLayoutFooter } from '../../components/auth-layout-footer/auth-layout-footer';

@Component({
  selector: 'app-main-layout',
  imports: [AknErpLayoutAuth, MainLayoutHeader],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}