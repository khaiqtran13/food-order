import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantWidgetComponent } from './components/restaurant-widget/restaurant-widget.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDDComponent } from './components/restaurant-dd/restaurant-dd.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RestaurantWidgetComponent,
  },
  {
    path: 'restaurant/:id',
    component: RestaurantDDComponent,
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantWidgetComponent,
    HeaderComponent,
    RestaurantDDComponent,
    OrderHistoryComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
