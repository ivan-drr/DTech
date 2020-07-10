import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp.FormComponent } from './sign-up.form.component';

describe('SignUp.FormComponent', () => {
  let component: SignUp.FormComponent;
  let fixture: ComponentFixture<SignUp.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
