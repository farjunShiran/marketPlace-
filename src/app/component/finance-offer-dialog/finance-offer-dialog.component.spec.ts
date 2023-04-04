import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOfferDialogComponent } from './finance-offer-dialog.component';

describe('FinanceOfferDialogComponent', () => {
  let component: FinanceOfferDialogComponent;
  let fixture: ComponentFixture<FinanceOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceOfferDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
