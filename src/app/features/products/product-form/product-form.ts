import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product';
import { Product } from '../../../shared/models/product.model';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories = [
    { label: 'Lubrificantes', value: 'Lubrificantes' },
    { label: 'Filtros', value: 'Filtros' },
    { label: 'Limpeza', value: 'Limpeza' },
    { label: 'Higiene', value: 'Higiene' },
    { label: 'Outros', value: 'Outros' }
  ];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      retailPrice: [0, [Validators.required, Validators.min(0.01)]],
      wholesalePrice: [0, [Validators.required, Validators.min(0.01)]],
      lotNumber: ['', Validators.required],
      expiryDate: [''],
      initialQuantity: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      
      const newProduct: Product = {
        id: this.generateId(),
        name: formValue.name,
        description: formValue.description,
        category: formValue.category,
        price: {
          retail: formValue.retailPrice,
          wholesale: formValue.wholesalePrice
        },
        stock: {
          quantity: formValue.initialQuantity,
          lots: [{
            lotNumber: formValue.lotNumber,
            expiryDate: formValue.expiryDate || 'N/A',
            quantity: formValue.initialQuantity
          }]
        }
      };

      this.productService.createProduct(newProduct);
      this.router.navigate(['/products']);
    } else {
      this.markFormGroupTouched();
    }
  }

  private generateId(): string {
    return Date.now().toString();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }

  // Métodos para validação no template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.productForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.productForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} é obrigatório`;
      if (field.errors['minlength']) return `${fieldName} deve ter pelo menos ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['min']) return `${fieldName} deve ser maior que ${field.errors['min'].min}`;
    }
    return '';
  }
}
