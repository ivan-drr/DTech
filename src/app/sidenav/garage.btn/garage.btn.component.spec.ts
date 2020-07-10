import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Garage.BtnComponent } from './garage.btn.component';

describe('Garage.BtnComponent', () => {
  let component: Garage.BtnComponent;
  let fixture: ComponentFixture<Garage.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Garage.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Garage.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
