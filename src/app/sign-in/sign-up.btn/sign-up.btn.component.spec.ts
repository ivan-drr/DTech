import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp.BtnComponent } from './sign-up.btn.component';

describe('SignUp.BtnComponent', () => {
  let component: SignUp.BtnComponent;
  let fixture: ComponentFixture<SignUp.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
