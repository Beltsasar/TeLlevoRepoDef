import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexPPage } from './index-p.page';

describe('IndexPPage', () => {
  let component: IndexPPage;
  let fixture: ComponentFixture<IndexPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
