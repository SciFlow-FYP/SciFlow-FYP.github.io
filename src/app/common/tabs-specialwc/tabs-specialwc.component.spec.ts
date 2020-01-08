import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSpecialwcComponent } from './tabs-specialwc.component';

describe('TabsSpecialwcComponent', () => {
  let component: TabsSpecialwcComponent;
  let fixture: ComponentFixture<TabsSpecialwcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSpecialwcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSpecialwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
