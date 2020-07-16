import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSheetApiComponent } from './google-sheet-api.component';

describe('GoogleSheetApiComponent', () => {
  let component: GoogleSheetApiComponent;
  let fixture: ComponentFixture<GoogleSheetApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSheetApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSheetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
