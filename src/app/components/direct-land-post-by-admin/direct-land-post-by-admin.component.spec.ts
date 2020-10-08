import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectLandPostByAdminComponent } from './direct-land-post-by-admin.component';

describe('DirectLandPostByAdminComponent', () => {
  let component: DirectLandPostByAdminComponent;
  let fixture: ComponentFixture<DirectLandPostByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectLandPostByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectLandPostByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
