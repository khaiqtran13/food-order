import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Restaurant } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  addNewRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiURL + 'restaurants/', restaurant);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + 'orders/');
  }

  deleteOrder(orderID: number): Observable<Order> {
    return this.http.delete<Order>(this.apiURL + 'orders/' + orderID);
  }
}
