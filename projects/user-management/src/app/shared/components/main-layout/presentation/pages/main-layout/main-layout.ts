import { Component } from '@angular/core';
import { AknErpLayoutMain } from 'user-management-ui';
import { AuthLayoutFooter } from '../../components/auth-layout-footer/auth-layout-footer';
import { MainLayoutHeader } from '../../components/main-layout-header/main-layout-header';

@Component({
  selector: 'app-main-layout',
  imports: [AknErpLayoutMain, MainLayoutHeader],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}