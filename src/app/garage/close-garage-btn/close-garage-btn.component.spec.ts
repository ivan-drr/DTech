import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseGarageBtnComponent } from './close-garage-btn.component';

describe('CloseGarageBtnComponent', () => {
  let component: CloseGarageBtnComponent;
  let fixture: ComponentFixture<CloseGarageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseGarageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseGarageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
