import { Component, Input, Output, EventEmitter, SimpleChange} from "@angular/core";
import { CartService } from "src/app/core/service/cart.service";
import { Product } from "../../../product.model";





@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})

export class ProductComponent {
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
    //console.log("1.constructor");

  }

  ngOnChanges(changes: SimpleChange) {
    // console.log("2.ngOnChange");
    // console.log(changes);

  }

  ngOnInit() {
    // console.log("3.ngOnInit")
  }

  ngDoCheck () {
    // console.log("4.ngDoCheck")
  }

  ngOnDestroy() {
    // console.log("5.ngDestroy")

  }

  addCart() {
    console.log("añadir al carrito");
    // this.productClicked.emit(this.product.id)
    this.cartService.addCart(this.product);
  }
}
