import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'akn-erp-layout-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './akn-erp-layout-main.html',
  styleUrls: ['./akn-erp-layout-main.css'],
})
export class AknErpLayoutMain {
   @Input() test = 'test';
}
