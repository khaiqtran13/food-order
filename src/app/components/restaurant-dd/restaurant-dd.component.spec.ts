import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDDComponent } from './restaurant-dd.component';

describe('RestaurantDDComponent', () => {
  let component: RestaurantDDComponent;
  let fixture: ComponentFixture<RestaurantDDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantDDComponent]
    });
    fixture = TestBed.createComponent(RestaurantDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
