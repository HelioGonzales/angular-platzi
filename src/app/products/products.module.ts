import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './componentes/products/products.component';
import { ProductsRoutingModule } from './products-routing.modules';
import { ProductComponent } from './componentes/product/product.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
