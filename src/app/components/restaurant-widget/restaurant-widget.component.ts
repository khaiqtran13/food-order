import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Restaurant } from 'src/app/types';

@Component({
  selector: 'app-Restaurant-widget',
  templateUrl: './restaurant-widget.component.html',
  styleUrls: ['./restaurant-widget.component.css'],
})
export class RestaurantWidgetComponent {
  restaurants: Restaurant[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getAllRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }
}
