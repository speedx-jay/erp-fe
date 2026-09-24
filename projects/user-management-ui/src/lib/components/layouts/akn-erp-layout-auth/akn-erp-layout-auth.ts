import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'akn-erp-layout-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './akn-erp-layout-auth.html',
  styleUrls: ['./akn-erp-layout-auth.css'],
})
export class AknErpLayoutAuth {
   @Input() test = 'test';
}
