import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVendorComponent } from './navbar-vendor.component';

describe('NavbarVendorComponent', () => {
  let component: NavbarVendorComponent;
  let fixture: ComponentFixture<NavbarVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
