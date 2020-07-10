import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlTvComponent } from './remote-control-tv.component';

describe('RemoteControlTvComponent', () => {
  let component: RemoteControlTvComponent;
  let fixture: ComponentFixture<RemoteControlTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteControlTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteControlTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
