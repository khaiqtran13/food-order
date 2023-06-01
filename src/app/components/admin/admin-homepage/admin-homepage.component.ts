import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css'],
})
export class AdminHomepageComponent {
  actions = ['Manage Orders', 'Add Restaurant', 'Manage Restaurants'];
  expandedIndex = 2;
}
