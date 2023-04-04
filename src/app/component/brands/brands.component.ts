import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  brands = [
    {
      name: 'Mazda',
      image: '../../../../assets/images/logo_mazda.png',
    },
    {
      name: 'Toyota',
      image: '../../../../assets/images/logo_toyota.png',
    },
    {
      name: 'Audi',
      image: '../../../../assets/images/logo_audi.png',
    },
    {
      name: 'Mercedes',
      image: '../../../../assets/images/logo_Mercedes.jpeg',
    },
  ];
  constructor(private router: Router) {}

  goToModelsPage(brandName: string) {
    this.router.navigate(['models', brandName]);
  }
}
