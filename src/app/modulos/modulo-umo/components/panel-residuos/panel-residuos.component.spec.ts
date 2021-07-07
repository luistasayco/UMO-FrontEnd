import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResiduosComponent } from './panel-residuos.component';

describe('PanelResiduosComponent', () => {
  let component: PanelResiduosComponent;
  let fixture: ComponentFixture<PanelResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
