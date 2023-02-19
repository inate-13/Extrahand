import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceListUiComponent } from './vendor-service-list-ui.component';

describe('VendorServiceListUiComponent', () => {
  let component: VendorServiceListUiComponent;
  let fixture: ComponentFixture<VendorServiceListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorServiceListUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorServiceListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
