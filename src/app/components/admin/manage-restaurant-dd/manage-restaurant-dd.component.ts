import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { OrderService } from 'src/app/services/order.service';
import { MenuItem, Restaurant } from 'src/app/types';

@Component({
  selector: 'app-manage-restaurant-dd',
  templateUrl: './manage-restaurant-dd.component.html',
  styleUrls: ['./manage-restaurant-dd.component.css'],
})
export class ManageRestaurantDdComponent {
  restaurant: Restaurant = {
    id: 0,
    name: '',
    image: '',
    menu: [],
    description: '',
  };

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.orderService.getRestaurantInfo(id).subscribe((data) => {
          this.restaurant = data;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isValidForm()) {
      this.adminService.updateRestaurant(this.restaurant).subscribe();
      this.router.navigate(['/admin']);
    }
  }

  deleteMenuItem(index: number): void {
    this.restaurant.menu.splice(index, 1);
  }

  deleteRestaurant(id: number): void {
    this.adminService.deleteRestaurant(id).subscribe();
    this.router.navigate(['/admin']);
  }

  addMenuItem(): void {
    const newMenuItem: MenuItem = {
      id: this.restaurant.menu.length + 1,
      name: '',
      image: '',
    } as MenuItem;

    this.restaurant.menu = [...this.restaurant.menu, newMenuItem];
  }

  isValidForm(): boolean {
    return (
      this.restaurant.name !== '' &&
      this.restaurant.description !== '' &&
      this.restaurant.image !== '' &&
      this.restaurant.menu.length > 0 &&
      this.restaurant.menu.every((item) => item.name !== '')
    );
  }
}
