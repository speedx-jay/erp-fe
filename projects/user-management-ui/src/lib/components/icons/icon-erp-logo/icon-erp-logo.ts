import { Component, Input } from '@angular/core';

type IconFill = 'filled' | 'outline';

type IconSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

@Component({
  selector: 'icon-erp-logo',
  standalone: true,
  imports: [],
  templateUrl: './icon-erp-logo.html',
  styleUrl: './icon-erp-logo.css',
})
export class IconErpLogo {
  @Input() fill: IconFill = 'filled';

  @Input() size: IconSize = 'sm';
}