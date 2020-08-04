import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessBarComponent } from './brightness-bar.component';

describe('BrightnessBarComponent', () => {
  let component: BrightnessBarComponent;
  let fixture: ComponentFixture<BrightnessBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightnessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
