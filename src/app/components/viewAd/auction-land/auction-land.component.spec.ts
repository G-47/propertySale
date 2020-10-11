import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLandComponent } from './auction-land.component';

describe('AuctionLandComponent', () => {
  let component: AuctionLandComponent;
  let fixture: ComponentFixture<AuctionLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
