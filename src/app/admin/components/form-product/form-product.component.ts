import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { MyValidators } from 'src/app/utils/validators';
import { AngularFireStorage } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(["./admin/products"])

      })
    }
    console.log(this.form.value);

  }

  uploadFile(event: any) {
    const file = event.target.files[0]
    const name = "image.png";
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get("image")?.setValue(url);
        });
      })
    )
    .subscribe()


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      price: ["", [Validators.required, MyValidators.isPriceValid]],
      image: [""],
      description: ["", [Validators.required]]
    })
  }

  get priceField() {
    return this.form.get("price");
  }

}
