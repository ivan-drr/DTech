import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBtnComponent } from './control-btn.component';

describe('ControlBtnComponent', () => {
  let component: ControlBtnComponent;
  let fixture: ComponentFixture<ControlBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
