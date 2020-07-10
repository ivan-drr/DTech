import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Motion.BtnComponent } from './motion.btn.component';

describe('Motion.BtnComponent', () => {
  let component: Motion.BtnComponent;
  let fixture: ComponentFixture<Motion.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Motion.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Motion.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
