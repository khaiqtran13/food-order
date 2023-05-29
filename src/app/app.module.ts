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

const appRoutes: Routes = [
  {
    path: '',
    component: RestaurantWidgetComponent,
  },
  {
    path: 'restaurant/:id',
    component: RestaurantDDComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantWidgetComponent,
    HeaderComponent,
    RestaurantDDComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
