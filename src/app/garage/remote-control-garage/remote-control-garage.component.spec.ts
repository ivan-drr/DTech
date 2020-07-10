import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlGarageComponent } from './remote-control-garage.component';

describe('RemoteControlGarageComponent', () => {
  let component: RemoteControlGarageComponent;
  let fixture: ComponentFixture<RemoteControlGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteControlGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
