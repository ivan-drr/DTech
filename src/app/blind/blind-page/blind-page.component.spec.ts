import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindPageComponent } from './blind-page.component';

describe('BlindPageComponent', () => {
  let component: BlindPageComponent;
  let fixture: ComponentFixture<BlindPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
