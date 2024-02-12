import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyTenthComponent } from './readonly-tenth.component';

describe('ReadonlyTenthComponent', () => {
  let component: ReadonlyTenthComponent;
  let fixture: ComponentFixture<ReadonlyTenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyTenthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadonlyTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
