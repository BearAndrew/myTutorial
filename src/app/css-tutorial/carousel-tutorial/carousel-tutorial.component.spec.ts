import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTutorialComponent } from './carousel-tutorial.component';

describe('CarouselTutorialComponent', () => {
  let component: CarouselTutorialComponent;
  let fixture: ComponentFixture<CarouselTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
