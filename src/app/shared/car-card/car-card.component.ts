import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
  standalone: true,
  imports:[
    CardModule,
    ButtonModule,
    DividerModule
  ]
})
export class CarCardComponent {
@Input() item:any
}
