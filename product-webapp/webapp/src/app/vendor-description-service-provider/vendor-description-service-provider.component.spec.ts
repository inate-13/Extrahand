import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDescriptionServiceProviderComponent } from './vendor-description-service-provider.component';

describe('VendorDescriptionServiceProviderComponent', () => {
  let component: VendorDescriptionServiceProviderComponent;
  let fixture: ComponentFixture<VendorDescriptionServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDescriptionServiceProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDescriptionServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
