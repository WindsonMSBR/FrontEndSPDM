import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProducts: Product[] = [
    {
      id: '1', 
      name: 'Copo de papel', 
      description: 'Copo de papel liso 180 ml biodegradável descartável 50 unidades',
      price: { retail: 29.90, wholesale: 25.00 },
      stock: {
        quantity: 150,
        lots: [{ lotNumber: 'LOTE001', expiryDate: 'N/A', quantity: 150 }]
      },
      category: 'Descartáveis'
    },
    {
      id: '2', 
      name: 'Detergente', 
      description: 'Detergente Líquido Lava Louças Clear Ypê Rende Mais 5 Litros',
      price: { retail: 62.90, wholesale: 55.00 },
      stock: {
        quantity: 80,
        lots: [
          { lotNumber: 'LOTE002', expiryDate: '2026-12-31', quantity: 80 }
        ]
      },
      category: 'Limpeza'
    },
    {
      id: '3', 
      name: 'Papel Higiênico', 
      description: 'Papel de papel Hygiees Profissional, 15 cm, branco, 100 unidades',
      price: { retail: 49.90, wholesale: 42.00 },
      stock: {
        quantity: 200,
        lots: [
          { lotNumber: 'LOTE003', expiryDate: 'N/A', quantity: 200 }
        ]
      },
      category: 'Higiene'
    },
    {
      id: '4', 
      name: 'Sabonete', 
      description: 'NIVEA Sabonete em Barra Creme Care Promo 6 un. 90g',
      price: { retail: 19.90, wholesale: 16.00 },
      stock: {
        quantity: 120,
        lots: [
          { lotNumber: 'LOTE004', expiryDate: '2027-06-30', quantity: 120 }
        ]
      },
      category: 'Higiene'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  createProduct(product: Product): void {
    this.mockProducts.push(product);
    console.log('Produto criado:', product);
    console.log('Lista atualizada:', this.mockProducts);
  }
}
