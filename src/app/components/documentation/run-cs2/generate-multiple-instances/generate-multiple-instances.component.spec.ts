import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMultipleInstancesComponent } from './generate-multiple-instances.component';

describe('GenerateMultipleInstancesComponent', () => {
  let component: GenerateMultipleInstancesComponent;
  let fixture: ComponentFixture<GenerateMultipleInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateMultipleInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMultipleInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
