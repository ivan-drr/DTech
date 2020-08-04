import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPageComponent } from './light-page.component';

describe('LightPageComponent', () => {
  let component: LightPageComponent;
  let fixture: ComponentFixture<LightPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
