import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWFComponent } from './dynamic-wf.component';

describe('DynamicWFComponent', () => {
  let component: DynamicWFComponent;
  let fixture: ComponentFixture<DynamicWFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicWFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicWFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
