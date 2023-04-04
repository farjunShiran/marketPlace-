import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './component/brands/brands.component';
import { HomeComponent } from './component/home/home.component';
import { ModelsComponent } from './component/models/models.component';
import { BoxModelComponent } from './component/box-model/box-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brand', component: BrandsComponent },
  { path: 'models/:brandName', component: ModelsComponent },
  { path: 'model', component: BoxModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
