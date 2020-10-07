import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLandComponent } from './review-land.component';

describe('ReviewLandComponent', () => {
  let component: ReviewLandComponent;
  let fixture: ComponentFixture<ReviewLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
