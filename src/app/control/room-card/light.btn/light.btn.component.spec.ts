import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light.BtnComponent } from './light.btn.component';

describe('Light.BtnComponent', () => {
  let component: Light.BtnComponent;
  let fixture: ComponentFixture<Light.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
