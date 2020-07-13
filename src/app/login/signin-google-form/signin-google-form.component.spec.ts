import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninGoogleFormComponent } from './signin-google-form.component';

describe('SigninGoogleFormComponent', () => {
  let component: SigninGoogleFormComponent;
  let fixture: ComponentFixture<SigninGoogleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninGoogleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninGoogleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
