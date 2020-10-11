import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHouseComponent } from './review-house.component';

describe('ReviewHouseComponent', () => {
  let component: ReviewHouseComponent;
  let fixture: ComponentFixture<ReviewHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
