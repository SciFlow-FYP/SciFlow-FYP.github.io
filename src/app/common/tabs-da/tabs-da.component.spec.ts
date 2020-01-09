import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDaComponent } from './tabs-da.component';

describe('TabsDaComponent', () => {
  let component: TabsDaComponent;
  let fixture: ComponentFixture<TabsDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
