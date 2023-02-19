import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompalintServiceComponent } from './compalint-service.component';

describe('CompalintServiceComponent', () => {
  let component: CompalintServiceComponent;
  let fixture: ComponentFixture<CompalintServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompalintServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompalintServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
