import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBackgroundComponentComponent } from './nav-background-component.component';

describe('NavBackgroundComponentComponent', () => {
  let component: NavBackgroundComponentComponent;
  let fixture: ComponentFixture<NavBackgroundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBackgroundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBackgroundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
