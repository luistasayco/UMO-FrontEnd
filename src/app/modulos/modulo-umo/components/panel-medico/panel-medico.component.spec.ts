import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMedicoComponent } from './panel-medico.component';

describe('PanelMedicoComponent', () => {
  let component: PanelMedicoComponent;
  let fixture: ComponentFixture<PanelMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
