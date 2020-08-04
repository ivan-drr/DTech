import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteCardComponent } from './remote-card.component';

describe('RemoteCardComponent', () => {
  let component: RemoteCardComponent;
  let fixture: ComponentFixture<RemoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
