import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { MenuItem, Order, Restaurant } from 'src/app/types';

interface DisplayMenuItem extends MenuItem {
  selected: boolean;
}

@Component({
  selector: 'app-restaurant-dd',
  templateUrl: './restaurant-dd.component.html',
  styleUrls: ['./restaurant-dd.component.css'],
})
export class RestaurantDDComponent {
  restaurant: Restaurant;
  displayMenuItems: DisplayMenuItem[];
  selectedMenuItem: DisplayMenuItem | null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.orderService.getRestaurantMenu(id).subscribe((data) => {
          console.log(data);
          this.restaurant = data;
          this.displayMenuItems = (data as any).menu?.map(
            (menuItem: MenuItem) => ({
              ...menuItem,
              selected: false,
            })
          );
        });
      }
    });
  }

  selectMenuItem(menuItem: DisplayMenuItem) {
    console.log(menuItem);
    this.selectedMenuItem = menuItem;
  }

  onSubmit() {
    if (this.selectedMenuItem) {
      const order: Order = {
        restaurantId: this.restaurant.id,
        menuItems: [this.selectedMenuItem],
        customerId: 1,
        id: 0,
      };
      this.orderService
        .submitOrder(order)
        .subscribe((data) => console.log('==== orders', data));
    }
  }
}