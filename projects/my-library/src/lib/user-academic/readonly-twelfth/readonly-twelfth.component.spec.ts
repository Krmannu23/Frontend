import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyTwelfthComponent } from './readonly-twelfth.component';

describe('ReadonlyTwelfthComponent', () => {
  let component: ReadonlyTwelfthComponent;
  let fixture: ComponentFixture<ReadonlyTwelfthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyTwelfthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadonlyTwelfthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
