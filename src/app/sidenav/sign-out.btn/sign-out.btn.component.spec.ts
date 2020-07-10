import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOut.BtnComponent } from './sign-out.btn.component';

describe('SignOut.BtnComponent', () => {
  let component: SignOut.BtnComponent;
  let fixture: ComponentFixture<SignOut.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOut.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOut.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
