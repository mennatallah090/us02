import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { HowWorkComponent } from './components/how-work/how-work.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports:[
    HeaderComponent,
    SearchComponent,
    MostPopularComponent,
    HowWorkComponent,
    ClientsComponent,
    ChooseUsComponent,
    TestimonialsComponent,
    ContactComponent
  ]
})
export class HomeComponent {

}
