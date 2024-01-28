import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateEventComponent } from './add-update-event.component';

describe('AddUpdateEventComponent', () => {
  let component: AddUpdateEventComponent;
  let fixture: ComponentFixture<AddUpdateEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateEventComponent]
    });
    fixture = TestBed.createComponent(AddUpdateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
