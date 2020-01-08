import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingMultipleWorkflowsComponent } from './handling-multiple-workflows.component';

describe('HandlingMultipleWorkflowsComponent', () => {
  let component: HandlingMultipleWorkflowsComponent;
  let fixture: ComponentFixture<HandlingMultipleWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlingMultipleWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingMultipleWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
