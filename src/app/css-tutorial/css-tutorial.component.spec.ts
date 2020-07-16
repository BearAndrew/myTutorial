import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTutorialComponent } from './css-tutorial.component';

describe('CssTutorialComponent', () => {
  let component: CssTutorialComponent;
  let fixture: ComponentFixture<CssTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
