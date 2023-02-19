import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderUserUiComponent } from './service-provider-user-ui.component';

describe('ServiceProviderUserUiComponent', () => {
  let component: ServiceProviderUserUiComponent;
  let fixture: ComponentFixture<ServiceProviderUserUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProviderUserUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProviderUserUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
