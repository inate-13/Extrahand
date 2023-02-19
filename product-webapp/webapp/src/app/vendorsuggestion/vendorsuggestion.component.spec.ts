import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsuggestionComponent } from './vendorsuggestion.component';

describe('VendorsuggestionComponent', () => {
  let component: VendorsuggestionComponent;
  let fixture: ComponentFixture<VendorsuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
