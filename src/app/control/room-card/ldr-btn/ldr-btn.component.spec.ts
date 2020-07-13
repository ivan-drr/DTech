import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdrBtnComponent } from './ldr-btn.component';

describe('LdrBtnComponent', () => {
  let component: LdrBtnComponent;
  let fixture: ComponentFixture<LdrBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdrBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdrBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
