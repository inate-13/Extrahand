import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoatServiceComponent } from './chat-boat-service.component';

describe('ChatBoatServiceComponent', () => {
  let component: ChatBoatServiceComponent;
  let fixture: ComponentFixture<ChatBoatServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoatServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBoatServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
