import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmoRegistrarComponent } from './umo-registrar.component';

describe('UmoRegistrarComponent', () => {
  let component: UmoRegistrarComponent;
  let fixture: ComponentFixture<UmoRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmoRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
