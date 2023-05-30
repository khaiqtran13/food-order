import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/app/types';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent {
  order: Order;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Order,
    public dialogRef: MatDialogRef<OrderConfirmationComponent>
  ) {
    this.order = data;
  }

  close() {
    this.dialogRef.close();
  }
}
