import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCoordinationComponent } from './channel-coordination.component';

describe('ChannelCoordinationComponent', () => {
  let component: ChannelCoordinationComponent;
  let fixture: ComponentFixture<ChannelCoordinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelCoordinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
