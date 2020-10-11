import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuctionAdComponent } from './post-auction-ad.component';

describe('PostAuctionAdComponent', () => {
  let component: PostAuctionAdComponent;
  let fixture: ComponentFixture<PostAuctionAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAuctionAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuctionAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
