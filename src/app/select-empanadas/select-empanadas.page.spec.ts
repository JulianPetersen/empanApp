import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectEmpanadasPage } from './select-empanadas.page';

describe('SelectEmpanadasPage', () => {
  let component: SelectEmpanadasPage;
  let fixture: ComponentFixture<SelectEmpanadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEmpanadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
