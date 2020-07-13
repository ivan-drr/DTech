import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitBtnComponent } from './exit-btn.component';

describe('ExitBtnComponent', () => {
  let component: ExitBtnComponent;
  let fixture: ComponentFixture<ExitBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
