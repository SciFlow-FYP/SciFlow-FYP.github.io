import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTspComponent } from './tabs-tsp.component';

describe('TabsTspComponent', () => {
  let component: TabsTspComponent;
  let fixture: ComponentFixture<TabsTspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
