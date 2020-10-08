import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectHousePostByAdminComponent } from './direct-house-post-by-admin.component';

describe('DirectHousePostByAdminComponent', () => {
  let component: DirectHousePostByAdminComponent;
  let fixture: ComponentFixture<DirectHousePostByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectHousePostByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectHousePostByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
