import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: any;
  productsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productsServiceService: ProductsServiceService
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
        const product_id = data.get('product_id');
        this.productsServiceService.getProductByProductId(product_id).subscribe(
          response => {
            console.log(response);
            this.productsForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );  
  }
}