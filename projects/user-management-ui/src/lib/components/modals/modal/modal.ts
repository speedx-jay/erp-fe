import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AknErpModalSize, AknErpModalPosition } from '../../../exports';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input()
  modalPosition: AknErpModalPosition = 'top-right';

  @Input()
  modalSize: AknErpModalSize = 'xs';

  @Input()
  isOpen = false;

  @Input()
  title = '';

  @Input()
  showHeader = true;

  @Input()
  showFooter = true;

  @Output()
  closeRequested = new EventEmitter<void>();

  close(): void {
    this.closeRequested.emit();
  }

  onOverlayClick(): void {
    this.close();
  }

  onMenuClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
