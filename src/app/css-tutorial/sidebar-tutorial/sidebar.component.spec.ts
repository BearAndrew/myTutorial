import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTutorialComponent } from './sidebar-tutorial.component';

describe('SidebarTutorialComponent', () => {
  let component: SidebarTutorialComponent;
  let fixture: ComponentFixture<SidebarTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
