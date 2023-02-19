import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListVendorComponent } from './appointment-list-vendor.component';

describe('AppointmentListVendorComponent', () => {
  let component: AppointmentListVendorComponent;
  let fixture: ComponentFixture<AppointmentListVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentListVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentListVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
