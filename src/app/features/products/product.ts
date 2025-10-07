import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProducts: Product[] = [
    {
      id: '1', name: 'Óleo de Motor 15W40', description: 'Óleo semissintético para motores a gasolina.',
      price: { retail: 45.50, wholesale: 38.00 },
      stock: {
        quantity: 50,
        lots: [{ lotNumber: 'LOTE001', expiryDate: '2026-10-01', quantity: 50 }]
      },
      category: 'Lubrificantes'
    },
    {
      id: '2', name: 'Filtro de Ar', description: 'Filtro de ar para carros populares.',
      price: { retail: 25.00, wholesale: 20.00 },
      stock: {
        quantity: 120,
        lots: [
          { lotNumber: 'LOTE002', expiryDate: 'N/A', quantity: 70 },
          { lotNumber: 'LOTE003', expiryDate: 'N/A', quantity: 50 }
        ]
      },
      category: 'Filtros'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }
}
