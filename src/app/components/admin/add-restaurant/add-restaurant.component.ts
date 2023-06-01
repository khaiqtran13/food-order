import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MenuItem, Restaurant } from 'src/app/types';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  newRestaurant: Restaurant = {
    id: 0,
    name: '',
    description: '',
    image: '',
    menu: [],
  };
  menuItems: MenuItem[] = [];

  constructor(private adminService: AdminService, private router: Router) {}

  addRestaurant() {
    this.newRestaurant.menu = this.menuItems;
    this.adminService.addNewRestaurant(this.newRestaurant).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/admin']);
  }

  deleteMenuItem(index: number): void {
    this.menuItems.splice(index, 1);
  }

  addMenuItem(): void {
    const newMenuItem: MenuItem = {
      id: this.menuItems.length + 1,
      name: '',
      image: '',
    } as MenuItem;

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  isValidForm(): boolean {
    return (
      this.newRestaurant.name !== '' &&
      this.newRestaurant.description !== '' &&
      this.newRestaurant.image !== '' &&
      this.menuItems.length > 0 &&
      this.menuItems.every((item) => item.name !== '')
    );
  }
}
