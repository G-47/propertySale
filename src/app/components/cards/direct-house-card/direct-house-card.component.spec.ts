import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectHouseCardComponent } from './direct-house-card.component';

describe('DirectHouseCardComponent', () => {
  let component: DirectHouseCardComponent;
  let fixture: ComponentFixture<DirectHouseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectHouseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectHouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
