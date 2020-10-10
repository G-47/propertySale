import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectLandCardComponent } from './direct-land-card.component';

describe('DirectLandCardComponent', () => {
  let component: DirectLandCardComponent;
  let fixture: ComponentFixture<DirectLandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectLandCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectLandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
