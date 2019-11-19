import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CShomeComponent } from './cshome.component';

describe('CShomeComponent', () => {
  let component: CShomeComponent;
  let fixture: ComponentFixture<CShomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CShomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CShomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
