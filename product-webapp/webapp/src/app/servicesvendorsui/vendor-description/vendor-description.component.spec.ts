import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDescriptionComponent } from './vendor-description.component';

describe('VendorDescriptionComponent', () => {
  let component: VendorDescriptionComponent;
  let fixture: ComponentFixture<VendorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
