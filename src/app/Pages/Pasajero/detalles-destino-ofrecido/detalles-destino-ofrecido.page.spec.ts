import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesDestinoOfrecidoPage } from './detalles-destino-ofrecido.page';

describe('DetallesDestinoOfrecidoPage', () => {
  let component: DetallesDestinoOfrecidoPage;
  let fixture: ComponentFixture<DetallesDestinoOfrecidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDestinoOfrecidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
