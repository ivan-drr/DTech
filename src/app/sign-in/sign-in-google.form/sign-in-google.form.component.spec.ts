import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGoogle.FormComponent } from './sign-in-google.form.component';

describe('SignInGoogle.FormComponent', () => {
  let component: SignInGoogle.FormComponent;
  let fixture: ComponentFixture<SignInGoogle.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInGoogle.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInGoogle.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
