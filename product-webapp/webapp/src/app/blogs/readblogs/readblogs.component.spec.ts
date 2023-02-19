import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadblogsComponent } from './readblogs.component';

describe('ReadblogsComponent', () => {
  let component: ReadblogsComponent;
  let fixture: ComponentFixture<ReadblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
