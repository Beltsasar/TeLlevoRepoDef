import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfrecerRutaPage } from './ofrecer-ruta.page';

describe('OfrecerRutaPage', () => {
  let component: OfrecerRutaPage;
  let fixture: ComponentFixture<OfrecerRutaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrecerRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
