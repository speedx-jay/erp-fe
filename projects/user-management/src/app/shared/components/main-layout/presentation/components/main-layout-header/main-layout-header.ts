import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutService } from '../../../business/main-layout.service';
import { IconUser } from 'user-management-ui';

@Component({
  selector: 'app-main-layout-header',
  standalone: true,
  imports: [IconUser],
  templateUrl: './main-layout-header.html',
  styleUrl: './main-layout-header.css',
})
export class MainLayoutHeader {
  @Output() openModalSettings = new EventEmitter<void>();

  profileSettings(): void {
    this.openModalSettings.emit();
  }
}
