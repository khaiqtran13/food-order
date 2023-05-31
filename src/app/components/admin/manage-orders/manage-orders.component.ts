import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from 'src/app/types';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
})
export class ManageOrdersComponent {
  orders: Order[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  cancelOrder(orderID: number): void {
    this.adminService.deleteOrder(orderID).subscribe(() => {
      this.orders = this.orders.filter((order) => order.id !== orderID);
    });
  }
}
