import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCuentaPage } from './info-cuenta.page';

describe('InfoCuentaPage', () => {
  let component: InfoCuentaPage;
  let fixture: ComponentFixture<InfoCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
