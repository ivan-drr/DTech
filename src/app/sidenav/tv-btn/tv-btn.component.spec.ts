import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvBtnComponent } from './tv-btn.component';

describe('TvBtnComponent', () => {
  let component: TvBtnComponent;
  let fixture: ComponentFixture<TvBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
