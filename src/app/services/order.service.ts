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

  getRestaurantMenu(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.apiURL + 'restaurants/' + id);
  }

  submitOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiURL + 'orders/', order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + 'orders/');
  }
}
