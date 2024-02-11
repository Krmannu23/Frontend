import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschoolingdetailsComponent } from './userschoolingdetails.component';

describe('UserschoolingdetailsComponent', () => {
  let component: UserschoolingdetailsComponent;
  let fixture: ComponentFixture<UserschoolingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserschoolingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserschoolingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
