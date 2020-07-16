import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTutorialComponent } from './ng-tutorial.component';

describe('NgTutorialComponent', () => {
  let component: NgTutorialComponent;
  let fixture: ComponentFixture<NgTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
