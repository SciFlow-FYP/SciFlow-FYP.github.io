import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposabilityComponent } from './composability.component';

describe('ComposabilityComponent', () => {
  let component: ComposabilityComponent;
  let fixture: ComponentFixture<ComposabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
