import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarFotoPage } from './tomar-foto.page';

describe('TomarFotoPage', () => {
  let component: TomarFotoPage;
  let fixture: ComponentFixture<TomarFotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TomarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
