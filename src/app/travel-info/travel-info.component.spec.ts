import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInfoComponent } from './travel-info.component';

describe('TravelInfoComponent', () => {
  let component: TravelInfoComponent;
  let fixture: ComponentFixture<TravelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
