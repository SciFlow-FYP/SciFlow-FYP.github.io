import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudiesComponent } from './casestudies.component';

describe('CasestudiesComponent', () => {
  let component: CasestudiesComponent;
  let fixture: ComponentFixture<CasestudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
