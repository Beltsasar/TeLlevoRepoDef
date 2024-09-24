import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarAutoPage } from './buscar-auto.page';

describe('BuscarAutoPage', () => {
  let component: BuscarAutoPage;
  let fixture: ComponentFixture<BuscarAutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
