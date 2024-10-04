import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule],
})
export class ClientsComponent {
  partners: string[] = [
    '../../../../../assets/imgs/clients/1.png',
    '../../../../../assets/imgs/clients/2.png',
    '../../../../../assets/imgs/clients/3.png',
    '../../../../../assets/imgs/clients/4.png',
    '../../../../../assets/imgs/clients/5.png',
    '../../../../../assets/imgs/clients/6.png',
    '../../../../../assets/imgs/clients/7.png',
    '../../../../../assets/imgs/clients/8.png',
    '../../../../../assets/imgs/clients/9.png',
    // '../../../../../assets/imgs/clients/10.png',
    '../../../../../assets/imgs/clients/11.png',
    '../../../../../assets/imgs/clients/12.png',
    '../../../../../assets/imgs/clients/13.png',
    '../../../../../assets/imgs/clients/14.png',
    '../../../../../assets/imgs/clients/15.png',
    // '../../../../../assets/imgs/clients/16.png',
    '../../../../../assets/imgs/clients/17.png',
    '../../../../../assets/imgs/clients/18.png',
    '../../../../../assets/imgs/clients/19.png',
    '../../../../../assets/imgs/clients/20.png',
    '../../../../../assets/imgs/clients/21.png',
    '../../../../../assets/imgs/clients/22.png',
    '../../../../../assets/imgs/clients/23.png',
    '../../../../../assets/imgs/clients/24.png',
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 2,
        margin: 12,
      },
      400: {
        items: 2,
        margin: 12,
      },
      740: {
        items: 8,
        margin: 12,
      },
      940: {
        items: 8,
        margin: 12,
      }
    },
  };
}
