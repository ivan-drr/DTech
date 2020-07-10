import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseGarage.BtnComponent } from './close-garage.btn.component';

describe('CloseGarage.BtnComponent', () => {
  let component: CloseGarage.BtnComponent;
  let fixture: ComponentFixture<CloseGarage.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseGarage.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseGarage.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
