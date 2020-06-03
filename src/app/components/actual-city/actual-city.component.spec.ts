import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualCityComponent } from './actual-city.component';

describe('ActualCityComponent', () => {
  let component: ActualCityComponent;
  let fixture: ComponentFixture<ActualCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
