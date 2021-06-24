import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';

// import { ContactComponent } from './contact/componentes/contact.component';
import { DemoComponent } from './demo/demo.component';


import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product-detail/componentes/product-detail.component';




const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m=>m.HomeModule)
      },
      {
        path: "products",
        loadChildren: () => import("./products/products.module").then(m=>m.ProductsModule)
      },
      {
        path: "contact",
        loadChildren: () => import("./contact/contact.module").then(m=>m.ContactModule)
      },
      {
        path: "products/:id",
        loadChildren: () => import("./product-detail/product-detail.module").then(m=>m.ProductDetailModule)
      },
      {
        path: "order",
        loadChildren: () => import("./order/order.module").then(m=>m.OrderModule)
      },
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      }
    ]
  },
  {
        path: "admin",
        canActivate: [AdminGuard],
        loadChildren: () => import("./admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path: "demo",
    component: DemoComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
