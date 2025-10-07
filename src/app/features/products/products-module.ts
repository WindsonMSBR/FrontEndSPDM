import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ProductListComponent } from './product-list/product-list';
import { ProductFormComponent } from './product-form/product-form';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'new', component: ProductFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    ProductListComponent,
    ProductFormComponent
  ]
})
export class ProductsModule { }
