import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBoxComponent } from './event-box.component';

describe('EventBoxComponent', () => {
  let component: EventBoxComponent;
  let fixture: ComponentFixture<EventBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBoxComponent]
    });
    fixture = TestBed.createComponent(EventBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
