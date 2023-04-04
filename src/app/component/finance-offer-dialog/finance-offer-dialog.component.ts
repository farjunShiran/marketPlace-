import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { paymentDetails } from 'src/app/shared/model/paymentDetails.interface';

@Component({
  selector: 'app-finance-offer-dialog',
  templateUrl: './finance-offer-dialog.component.html',
  styleUrls: ['./finance-offer-dialog.component.scss'],
})
export class FinanceOfferDialogComponent {
  insert: number = 0.14;
  loanDurationSelected: number = 0;
  loanAmountSelected: number = 0;
  calculateObj: paymentDetails = {
    RemainingPayment: [],
    MonthlyPaymentAmount: 0,
    InsertMonthlyPayment: [],
    TotalMonthlyPayment: [],
    averagePayment: 0,
    totalPayment: 0,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FinanceOfferDialogComponent>,
    private fb: FormBuilder
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
  calculateFinanceOffer() {
    this.calculateObj.MonthlyPaymentAmount = Math.floor(
      this.loanAmountSelected / this.loanDurationSelected
    ); //col 2

    for (let i = 0; i < this.loanDurationSelected; i++) {
      let amount = Math.floor(
        this.loanAmountSelected -
          (this.loanAmountSelected / this.loanDurationSelected) * i
      );

      this.calculateObj.RemainingPayment.push(amount); // col 1
      this.calculateObj.InsertMonthlyPayment.push(
        Math.floor(amount * this.insert)
      ); //col 3

      let total =
        this.calculateObj.MonthlyPaymentAmount +
        this.calculateObj.InsertMonthlyPayment[i];
      this.calculateObj.TotalMonthlyPayment.push(Math.floor(total)); //col 4
    }
    this.calculateObj.totalPayment =Math.floor(
      this.calculateObj.TotalMonthlyPayment.reduce(
        (total, current) => total + current,
        0
      ));
    this.calculateObj.averagePayment =Math.floor(
      this.calculateObj.totalPayment / this.loanDurationSelected);

    console.log(
      'calc',
      this.calculateObj.averagePayment,
      this.calculateObj.totalPayment,
      this.calculateObj
    );
  }
}
