import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type BrandModels = {
  [brandName: string]: {
    modelName: string;
    image: string;
    price: number;
  }[];
};

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent {
  brandModels: BrandModels = {
    Audi: [
      {
        modelName: 'Audi A1',
        image: '../../../../assets/images/Audi/A1.jpg',
        price: 200000,
      },
      {
        modelName: 'Audi Q4',
        image: '../../../../assets/images/Audi/Q4.jpg',
        price: 100000,
      },
      {
        modelName: 'Audi Q7',
        image: '../../../../assets/images/Audi/Q7.jpg',
        price: 200000,
      },
    ],
    Mazda: [
      {
        modelName: 'Mazda M5',
        image: '../../../../assets/images/Mazda/M5.png',
        price: 180000,
      },
      {
        modelName: 'Mazda M6',
        image: '../../../../assets/images/Mazda/M6.png',
        price: 100000,
      },
    ],
  };

  brandName!: string;
  selectedModel: any;
  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.brandName = this.route.snapshot.paramMap.get('brandName')!;
    this.selectedModel = this.getModelsForBrand();
    console.log('brand name', this.brandName);
  }

  getModelsForBrand(): { modelName: string; image: string; price: number }[] {
    return this.brandModels[this.brandName];
  }
  

}
