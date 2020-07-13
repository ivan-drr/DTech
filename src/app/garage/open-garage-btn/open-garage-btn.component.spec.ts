import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGarageBtnComponent } from './open-garage-btn.component';

describe('OpenGarageBtnComponent', () => {
  let component: OpenGarageBtnComponent;
  let fixture: ComponentFixture<OpenGarageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGarageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGarageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
