import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuctionHouseAdComponent } from './post-auction-house-ad.component';

describe('PostAuctionHouseAdComponent', () => {
  let component: PostAuctionHouseAdComponent;
  let fixture: ComponentFixture<PostAuctionHouseAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAuctionHouseAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuctionHouseAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
