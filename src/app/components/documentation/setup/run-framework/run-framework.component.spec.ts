import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunFrameworkComponent } from './run-framework.component';

describe('RunFrameworkComponent', () => {
  let component: RunFrameworkComponent;
  let fixture: ComponentFixture<RunFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
