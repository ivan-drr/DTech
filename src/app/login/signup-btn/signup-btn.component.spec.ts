import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBtnComponent } from './signup-btn.component';

describe('SignupBtnComponent', () => {
  let component: SignupBtnComponent;
  let fixture: ComponentFixture<SignupBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
