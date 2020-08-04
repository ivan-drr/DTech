import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotePageComponent } from './remote-page.component';

describe('RemotePageComponent', () => {
  let component: RemotePageComponent;
  let fixture: ComponentFixture<RemotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemotePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
