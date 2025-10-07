import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ProductListComponent } from './product-list/product-list';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    ProductListComponent
  ]
})
export class ProductsModule { }
