import { Component } from '@angular/core';
import { Restaurant } from 'src/app/types';

@Component({
  selector: 'app-Restaurant-widget',
  templateUrl: './restaurant-widget.component.html',
  styleUrls: ['./restaurant-widget.component.css'],
})
export class RestaurantWidgetComponent {
  restaurants: Restaurant[] = [
    {
      name: 'McDonalds',
      image: 'https://via.placeholder.com/150',
      description: 'Fast food',
      id: 1,
    },
    {
      name: 'Burger King',
      image: 'https://via.placeholder.com/150',
      description: 'Fast food',
      id: 2,
    },
  ];

  constructor() {}
}
