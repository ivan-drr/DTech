import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIn.FormComponent } from './sign-in.form.component';

describe('SignIn.FormComponent', () => {
  let component: SignIn.FormComponent;
  let fixture: ComponentFixture<SignIn.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignIn.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIn.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
