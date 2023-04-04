import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelService } from 'src/app/shared/services/model.service';
import { MatDialog } from '@angular/material/dialog';
import { FinanceOfferDialogComponent } from '../finance-offer-dialog/finance-offer-dialog.component';

@Component({
  selector: 'app-box-model',
  templateUrl: './box-model.component.html',
  styleUrls: ['./box-model.component.scss']
})
export class BoxModelComponent {

  modelData$?: Observable<any>;

  constructor(private modelService: ModelService,private dialog: MatDialog) {}

  ngOnInit() {
    this.modelData$ = this.modelService.getModelData('camry');
  };
  openFinancePopup(data:any) {
    const dialogRef = this.dialog.open(FinanceOfferDialogComponent,{
     data:data 
    });
  }
  
}
