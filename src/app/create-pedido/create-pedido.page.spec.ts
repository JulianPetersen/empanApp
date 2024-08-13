import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePedidoPage } from './create-pedido.page';

describe('CreatePedidoPage', () => {
  let component: CreatePedidoPage;
  let fixture: ComponentFixture<CreatePedidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
