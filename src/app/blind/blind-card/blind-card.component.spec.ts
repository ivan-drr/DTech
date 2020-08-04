import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindCardComponent } from './blind-card.component';

describe('BlindCardComponent', () => {
  let component: BlindCardComponent;
  let fixture: ComponentFixture<BlindCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
