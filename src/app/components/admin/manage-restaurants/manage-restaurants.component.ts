import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OrderService } from 'src/app/services/order.service';
import { Restaurant } from 'src/app/types';

@Component({
  selector: 'app-manage-restaurants',
  templateUrl: './manage-restaurants.component.html',
  styleUrls: ['./manage-restaurants.component.css'],
})
export class ManageRestaurantsComponent {
  restaurants: Restaurant[] = [];
  constructor(
    private adminService: AdminService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.getAllRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }
}
