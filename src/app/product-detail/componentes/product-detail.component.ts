import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../product.model';
import { ProductsService } from '../../core/service/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
      //this.product = this.productsService.getProduct(id)!;
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      console.log(product);
      this.product = product;

    })
  }

  createProduct() {
    const newProduct: Product = {
      id: "22180401",
      title: "nuevo desde angular",
      image: "https://placeimg.com/640/480/any",
      price: 344556,
      description: "probando  desde angular"
    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
  });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 55555,
      description: "edicion titulo"
    };

    this.productsService.updateProduct("22180401", updateProduct).subscribe(product => {
      console.log(product);

    })
  }

  deleteProduct() {
    this.productsService.deleteProduct("22180401").subscribe(rta => {
      console.log(rta);

    })
  }

}
