import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTutorialComponent } from './other-tutorial.component';

describe('OtherTutorialComponent', () => {
  let component: OtherTutorialComponent;
  let fixture: ComponentFixture<OtherTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
