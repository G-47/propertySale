import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuctionLandAdComponent } from './post-auction-land-ad.component';

describe('PostAuctionLandAdComponent', () => {
  let component: PostAuctionLandAdComponent;
  let fixture: ComponentFixture<PostAuctionLandAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAuctionLandAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuctionLandAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
