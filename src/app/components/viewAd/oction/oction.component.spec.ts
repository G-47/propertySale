import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctionComponent } from './oction.component';

describe('OctionComponent', () => {
  let component: OctionComponent;
  let fixture: ComponentFixture<OctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
