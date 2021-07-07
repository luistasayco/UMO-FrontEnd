import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemsComponent } from './panel-items.component';

describe('PanelItemsComponent', () => {
  let component: PanelItemsComponent;
  let fixture: ComponentFixture<PanelItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
