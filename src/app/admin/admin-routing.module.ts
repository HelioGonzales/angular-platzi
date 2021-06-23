import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  {
    path: "",
    component: NavComponent,
    children: [
    {
      path: "create",
      component: ProductFormComponent
    },
    {
      path: "home",
      component: ProductDashboardComponent
    },
    {
      path: "inventario",
      component: ProductTableComponent
    },
    {
      path: "products",
      component: ProductsListComponent
    },
    {
      path: "products/create",
      component: FormProductComponent
    },
    {
      path: "login",
      component: LoginComponent
    },
    {
      path: "signup",
      component: SignupComponent
    },
    {
      path: "products/edit/:id",
      component: ProductEditComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
