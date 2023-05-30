import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/types';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orders: Order[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
