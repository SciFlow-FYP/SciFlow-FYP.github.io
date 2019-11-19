import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCS1Component } from './run-cs1.component';

describe('RunCS1Component', () => {
  let component: RunCS1Component;
  let fixture: ComponentFixture<RunCS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunCS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
