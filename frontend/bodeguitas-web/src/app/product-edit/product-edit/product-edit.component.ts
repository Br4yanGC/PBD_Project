import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product_id: any;
  product: any;
  productsForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServiceService: ProductsServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.productsForm = this.formBuilder.group({
      product_name: [''],
      product_trademark: [''],
      product_price: [''],
      product_type: [''],
      product_stock: [''],
      user_id: ['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id');
        this.productsServiceService.getProductByProductId(this.product_id).subscribe(
          response => {
            console.log(response);
            this.product = response;
            this.productsForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }
  saveProduct(product: any) {
    this.productsServiceService.updateProduct(this.product_id, product).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user-interface']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
