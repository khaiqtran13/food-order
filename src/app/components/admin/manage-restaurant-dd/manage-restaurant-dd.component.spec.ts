import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantDdComponent } from './manage-restaurant-dd.component';

describe('ManageRestaurantDdComponent', () => {
  let component: ManageRestaurantDdComponent;
  let fixture: ComponentFixture<ManageRestaurantDdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRestaurantDdComponent]
    });
    fixture = TestBed.createComponent(ManageRestaurantDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
