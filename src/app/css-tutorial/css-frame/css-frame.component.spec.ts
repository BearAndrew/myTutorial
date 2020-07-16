import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFrameComponent } from './css-frame.component';

describe('CssFrameComponent', () => {
  let component: CssFrameComponent;
  let fixture: ComponentFixture<CssFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
