import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brightness.BtnComponent } from './brightness.bar.component';

describe('Brightness.BtnComponent', () => {
  let component: Brightness.BtnComponent;
  let fixture: ComponentFixture<Brightness.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brightness.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brightness.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
