import { Routes } from '@angular/router';
import { DashboardPlaceholderComponent } from './features/dashboard-placeholder/dashboard-placeholder';
import { ProductsPlaceholderComponent } from './features/products-placeholder/products-placeholder';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPlaceholderComponent },
  { path: 'products', loadChildren: () => import('./features/products/products-module').then(m => m.ProductsModule) },
  { path: 'stock', component: ProductsPlaceholderComponent },
  { path: 'sales', component: DashboardPlaceholderComponent },
  { path: 'staff', component: DashboardPlaceholderComponent }
];
