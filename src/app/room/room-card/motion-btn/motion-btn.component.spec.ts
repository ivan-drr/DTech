import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionBtnComponent } from './motion-btn.component';

describe('MotionBtnComponent', () => {
  let component: MotionBtnComponent;
  let fixture: ComponentFixture<MotionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
