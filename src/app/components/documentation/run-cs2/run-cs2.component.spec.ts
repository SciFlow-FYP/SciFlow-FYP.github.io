import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCS2Component } from './run-cs2.component';

describe('RunCS2Component', () => {
  let component: RunCS2Component;
  let fixture: ComponentFixture<RunCS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunCS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
