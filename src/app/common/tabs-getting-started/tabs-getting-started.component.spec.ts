import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGettingStartedComponent } from './tabs-getting-started.component';

describe('TabsGettingStartedComponent', () => {
  let component: TabsGettingStartedComponent;
  let fixture: ComponentFixture<TabsGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsGettingStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
