import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLightBtnComponent } from './add-light-btn.component';

describe('AddLightBtnComponent', () => {
  let component: AddLightBtnComponent;
  let fixture: ComponentFixture<AddLightBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLightBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLightBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
