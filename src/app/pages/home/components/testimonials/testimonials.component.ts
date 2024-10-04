import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule,CardModule],
})
export class TestimonialsComponent {
  partners: string[] = [
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
    '../../../../../assets/imgs/test/test1.jpeg',
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
        items: 3,
        margin: 12,
      }
    },
  };

}
