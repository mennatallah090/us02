import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports:[
    MenubarModule,
    CommonModule,
    ButtonModule
  ]
})
export class NavbarComponent {
  menuSidebar: MenuItem[] = [
    {route:'rent',name:'Become a renter'},
    {route:'deals',name:'Rental deals'},
    {route:'service',name:'How it work'},
    {route:'about',name:'Why choose us'}
  ];

}
