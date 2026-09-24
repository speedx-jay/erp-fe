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
  selector: 'icon-user',
  standalone: true,
  imports: [],
  templateUrl: './icon-user.html',
  styleUrl: './icon-user.css',
})
export class IconUser {
  @Input() fill: IconFill = 'filled';

  @Input() size: IconSize = 'sm';
}