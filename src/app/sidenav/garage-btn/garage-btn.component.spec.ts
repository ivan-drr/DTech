import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageBtnComponent } from './garage-btn.component';

describe('GarageBtnComponent', () => {
  let component: GarageBtnComponent;
  let fixture: ComponentFixture<GarageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
