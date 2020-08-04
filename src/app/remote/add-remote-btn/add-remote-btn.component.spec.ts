import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoteBtnComponent } from './add-remote-btn.component';

describe('AddRemoteBtnComponent', () => {
  let component: AddRemoteBtnComponent;
  let fixture: ComponentFixture<AddRemoteBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoteBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
