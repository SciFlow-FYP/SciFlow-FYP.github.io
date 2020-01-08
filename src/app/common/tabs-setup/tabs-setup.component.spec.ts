import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSetupComponent } from './tabs-setup.component';

describe('TabsSetupComponent', () => {
  let component: TabsSetupComponent;
  let fixture: ComponentFixture<TabsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
