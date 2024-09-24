import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesConductorPage } from './ajustes-conductor.page';

describe('AjustesConductorPage', () => {
  let component: AjustesConductorPage;
  let fixture: ComponentFixture<AjustesConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
