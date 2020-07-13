import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninGoogleBtnComponent } from './signin-google-btn.component';

describe('SigninGoogleBtnComponent', () => {
  let component: SigninGoogleBtnComponent;
  let fixture: ComponentFixture<SigninGoogleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninGoogleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninGoogleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
