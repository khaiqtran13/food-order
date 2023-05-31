import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Restaurant } from '../types';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getRestaurantInfo(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.apiURL + 'restaurants/' + id);
  }

  // TODO: do not need the menu
  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiURL + 'restaurants/');
  }

  submitOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURL + 'orders/', order);
  }

  // TODO: should just be user's orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + 'orders/');
  }
}
