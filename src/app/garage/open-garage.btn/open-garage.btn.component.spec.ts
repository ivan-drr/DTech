import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGarage.BtnComponent } from './open-garage.btn.component';

describe('OpenGarage.BtnComponent', () => {
  let component: OpenGarage.BtnComponent;
  let fixture: ComponentFixture<OpenGarage.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGarage.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGarage.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
