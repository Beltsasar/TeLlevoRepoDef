import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoFormularioPage } from './auto-formulario.page';

describe('AutoFormularioPage', () => {
  let component: AutoFormularioPage;
  let fixture: ComponentFixture<AutoFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
