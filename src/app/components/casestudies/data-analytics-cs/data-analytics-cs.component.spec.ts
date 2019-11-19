import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsCSComponent } from './data-analytics-cs.component';

describe('DataAnalyticsCSComponent', () => {
  let component: DataAnalyticsCSComponent;
  let fixture: ComponentFixture<DataAnalyticsCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAnalyticsCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalyticsCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
