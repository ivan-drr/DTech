import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutBtnComponent } from './sign-out-btn.component';

describe('SignOutBtnComponent', () => {
  let component: SignOutBtnComponent;
  let fixture: ComponentFixture<SignOutBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
