import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercollegedetailsComponent } from './usercollegedetails.component';

describe('UsercollegedetailsComponent', () => {
  let component: UsercollegedetailsComponent;
  let fixture: ComponentFixture<UsercollegedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercollegedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercollegedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
