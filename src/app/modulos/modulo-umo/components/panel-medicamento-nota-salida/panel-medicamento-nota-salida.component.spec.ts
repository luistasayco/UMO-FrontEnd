import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMedicamentoNotaSalidaComponent } from './panel-medicamento-nota-salida.component';

describe('PanelMedicamentoNotaSalidaComponent', () => {
  let component: PanelMedicamentoNotaSalidaComponent;
  let fixture: ComponentFixture<PanelMedicamentoNotaSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMedicamentoNotaSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMedicamentoNotaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
