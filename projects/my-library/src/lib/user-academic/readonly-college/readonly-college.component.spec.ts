import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyCollegeComponent } from './readonly-college.component';

describe('ReadonlyCollegeComponent', () => {
  let component: ReadonlyCollegeComponent;
  let fixture: ComponentFixture<ReadonlyCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadonlyCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
