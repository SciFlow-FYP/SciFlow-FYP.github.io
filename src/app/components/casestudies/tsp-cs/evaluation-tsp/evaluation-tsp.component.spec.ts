import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTspComponent } from './evaluation-tsp.component';

describe('EvaluationTspComponent', () => {
  let component: EvaluationTspComponent;
  let fixture: ComponentFixture<EvaluationTspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationTspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationTspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
