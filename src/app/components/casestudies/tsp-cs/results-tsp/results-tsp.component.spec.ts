import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTspComponent } from './results-tsp.component';

describe('ResultsTspComponent', () => {
  let component: ResultsTspComponent;
  let fixture: ComponentFixture<ResultsTspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
