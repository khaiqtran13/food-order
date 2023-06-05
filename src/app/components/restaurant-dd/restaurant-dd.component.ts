import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { MenuItem, Order, Restaurant } from 'src/app/types';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';

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
    private orderService: OrderService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.orderService.getRestaurantInfo(id).subscribe((data) => {
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
        restaurantName: this.restaurant.name,
        restaurantImage: this.restaurant.image,
        customerId: 1,
        id: 0,
        customerName: 'Khai Tran',
        date: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      };

      this.orderService
        .submitOrder(order)
        .subscribe((data) => console.log('==== orders', data));

      this.dialog.open(OrderConfirmationComponent, {
        data: order,
        maxWidth: '100vw',
        maxHeight: '100vh',
        hasBackdrop: true,
      });
    }
  }
}
