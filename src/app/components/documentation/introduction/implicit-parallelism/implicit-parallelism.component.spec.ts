import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplicitParallelismComponent } from './implicit-parallelism.component';

describe('ImplicitParallelismComponent', () => {
  let component: ImplicitParallelismComponent;
  let fixture: ComponentFixture<ImplicitParallelismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplicitParallelismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplicitParallelismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
