import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceselectionComponent } from './serviceselection.component';

describe('ServiceselectionComponent', () => {
  let component: ServiceselectionComponent;
  let fixture: ComponentFixture<ServiceselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
