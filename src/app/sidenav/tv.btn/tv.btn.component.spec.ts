import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv.BtnComponent } from './tv.btn.component';

describe('Tv.BtnComponent', () => {
  let component: Tv.BtnComponent;
  let fixture: ComponentFixture<Tv.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tv.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tv.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
