import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ldr.BtnComponent } from './ldr.btn.component';

describe('Ldr.BtnComponent', () => {
  let component: Ldr.BtnComponent;
  let fixture: ComponentFixture<Ldr.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ldr.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ldr.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
