import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresumeComponent } from './userresume.component';

describe('UserresumeComponent', () => {
  let component: UserresumeComponent;
  let fixture: ComponentFixture<UserresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
