import { Component } from '@angular/core';
import { CarCardComponent } from '../../../../shared/car-card/car-card.component';
import { ButtonModule } from 'primeng/button';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss',
  standalone:true,
  imports:[
CarCardComponent,
ButtonModule
  ]
})
export class MostPopularComponent {
  constructor(private homeService:HomeService){
  }
  ngOnInit(){
    this.getPopularcars()
  }
items=[{
  image:'../../../../../assets/imgs/best-cars/car1.png',
title:'Jaguar XE L P250'
},{
  image:'../../../../../assets/imgs/best-cars/car2.png',
title:'Audi R8'


},{
  image:'../../../../../assets/imgs/best-cars/car3.png',
title:'BMW M3'


},
{
  image:'../../../../../assets/imgs/best-cars/8c245e6e83ee4564d62b9f4507c4b915.png',
title:'Lamborghini Huracan'

}]
getPopularcars(){
  this.homeService.getPopularCars(4).subscribe({
    next:(res)=>{
      this.items=res
    },
    error: (err) => {

    }
  })
}
}
