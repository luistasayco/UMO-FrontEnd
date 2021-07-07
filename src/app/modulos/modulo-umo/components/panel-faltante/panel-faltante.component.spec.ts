import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFaltanteComponent } from './panel-faltante.component';

describe('PanelFaltanteComponent', () => {
  let component: PanelFaltanteComponent;
  let fixture: ComponentFixture<PanelFaltanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFaltanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFaltanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
