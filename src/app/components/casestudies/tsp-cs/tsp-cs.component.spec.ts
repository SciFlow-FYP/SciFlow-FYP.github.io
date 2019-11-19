import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TspCSComponent } from './tsp-cs.component';

describe('TspCSComponent', () => {
  let component: TspCSComponent;
  let fixture: ComponentFixture<TspCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TspCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TspCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
