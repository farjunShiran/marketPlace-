import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ModelsComponent } from './component/models/models.component';
import { BoxModelComponent } from './component/box-model/box-model.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { FinanceOfferDialogComponent } from './component/finance-offer-dialog/finance-offer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    ModelsComponent,
    BoxModelComponent,
    FinanceOfferDialogComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,MatSliderModule,FormsModule
  ],
  entryComponents: [FinanceOfferDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
