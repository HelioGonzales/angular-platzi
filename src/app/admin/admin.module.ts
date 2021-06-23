import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

import { ProductTableComponent } from './components/product-table/product-table.component';



import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';




@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductDashboardComponent, ProductTableComponent, ProductsListComponent, FormProductComponent, LoginComponent, SignupComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class AdminModule { }
