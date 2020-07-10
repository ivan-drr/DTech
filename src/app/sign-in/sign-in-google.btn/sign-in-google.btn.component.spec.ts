import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGoogle.BtnComponent } from './sign-in-google.btn.component';

describe('SignInGoogle.BtnComponent', () => {
  let component: SignInGoogle.BtnComponent;
  let fixture: ComponentFixture<SignInGoogle.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInGoogle.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInGoogle.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
