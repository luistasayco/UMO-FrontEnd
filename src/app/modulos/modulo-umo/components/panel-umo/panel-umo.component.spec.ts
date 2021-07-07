import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUmoComponent } from './panel-umo.component';

describe('PanelUmoComponent', () => {
  let component: PanelUmoComponent;
  let fixture: ComponentFixture<PanelUmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelUmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelUmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
