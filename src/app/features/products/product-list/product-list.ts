import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CardModule, ButtonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  getProductImage(productName: string): string {
    // Mapear nomes de produtos para suas imagens SVG
    const imageMap: { [key: string]: string } = {
      'Copo de papel': '/products/copo-papel.svg',
      'Detergente': '/products/detergente.svg',
      'Papel Higiênico': '/products/papel-higienico.svg',
      'Sabonete': '/products/sabonete.svg'
    };
    
    return imageMap[productName] || '/products/copo-papel.svg';
  }
}
