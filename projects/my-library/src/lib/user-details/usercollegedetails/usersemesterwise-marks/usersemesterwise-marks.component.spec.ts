import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersemesterwiseMarksComponent } from './usersemesterwise-marks.component';

describe('UsersemesterwiseMarksComponent', () => {
  let component: UsersemesterwiseMarksComponent;
  let fixture: ComponentFixture<UsersemesterwiseMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersemesterwiseMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersemesterwiseMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
