import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBusesComponent } from './view-all-buses.component';

describe('ViewAllBusesComponent', () => {
  let component: ViewAllBusesComponent;
  let fixture: ComponentFixture<ViewAllBusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllBusesComponent]
    });
    fixture = TestBed.createComponent(ViewAllBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
