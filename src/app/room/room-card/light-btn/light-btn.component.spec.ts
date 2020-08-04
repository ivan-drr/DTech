import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBtnComponent } from './light-btn.component';

describe('LightBtnComponent', () => {
  let component: LightBtnComponent;
  let fixture: ComponentFixture<LightBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
