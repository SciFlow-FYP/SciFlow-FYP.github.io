import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaComponent } from './da.component';

describe('DaComponent', () => {
  let component: DaComponent;
  let fixture: ComponentFixture<DaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
