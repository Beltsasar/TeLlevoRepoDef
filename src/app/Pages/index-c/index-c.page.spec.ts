import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexCPage } from './index-c.page';

describe('IndexCPage', () => {
  let component: IndexCPage;
  let fixture: ComponentFixture<IndexCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
