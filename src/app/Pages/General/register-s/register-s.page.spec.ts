import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterSPage } from './register-s.page';

describe('RegisterSPage', () => {
  let component: RegisterSPage;
  let fixture: ComponentFixture<RegisterSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
