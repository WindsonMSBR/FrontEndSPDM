import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/navbar/navbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    MenubarModule
  ]
})
export class SharedModule { }
