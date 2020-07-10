import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Control.BtnComponent } from './control.btn.component';

describe('Control.BtnComponent', () => {
  let component: Control.BtnComponent;
  let fixture: ComponentFixture<Control.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Control.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Control.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
