import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServiceService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const product_id = data.get('product_id');
        this.productsServiceService.getProductByProductId(product_id).subscribe(
          response => {
            console.log(response);
            this.product = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );  
  }
}