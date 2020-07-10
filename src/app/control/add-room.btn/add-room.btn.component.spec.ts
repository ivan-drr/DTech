import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoom.BtnComponent } from './add-room.btn.component';

describe('AddRoom.BtnComponent', () => {
  let component: AddRoom.BtnComponent;
  let fixture: ComponentFixture<AddRoom.BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoom.BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoom.BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
