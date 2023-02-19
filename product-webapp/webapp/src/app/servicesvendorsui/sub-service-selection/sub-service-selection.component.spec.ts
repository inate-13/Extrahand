import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServiceSelectionComponent } from './sub-service-selection.component';

describe('SubServiceSelectionComponent', () => {
  let component: SubServiceSelectionComponent;
  let fixture: ComponentFixture<SubServiceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubServiceSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubServiceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
