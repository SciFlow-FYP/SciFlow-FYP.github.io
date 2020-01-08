import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunwfComponent } from './runwf.component';

describe('RunwfComponent', () => {
  let component: RunwfComponent;
  let fixture: ComponentFixture<RunwfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunwfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunwfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
