import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlindBtnComponent } from './add-blind-btn.component';

describe('AddBlindBtnComponent', () => {
  let component: AddBlindBtnComponent;
  let fixture: ComponentFixture<AddBlindBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlindBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlindBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
