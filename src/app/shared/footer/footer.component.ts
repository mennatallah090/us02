import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone:true,
  imports:[
ButtonModule
  ]
})
export class FooterComponent {
  // categories!: Category[];
  Subscribe!: string;
  social:{link:string, icon:string}[] = [
    {link:"https://www.facebook.com/markableintl" , icon:"pi pi-facebook"},
    {link:"https://www.instagram.com/markableintl/" , icon:"pi pi-instagram"},
    {link:"https://www.youtube.com/channel/UC_9O0wEuDNJTaZts-exXV4A/videos?app=desktop" , icon:"pi pi-youtube"},
  ]
}
