import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  user_id: any;
  product_id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productServiceService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.user_id = data.get('user_id');
        this.product_id = data.get('product_id')
      }
    );
  }
  deleteProduct(user_id: any, product_id: any) {
    this.productServiceService.deleteProduct(user_id, product_id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user-interface']);
      },
      error => {
        console.error(error)
      }
    );
  }
  goBack() {
    this.router.navigate(['/user-interface'])
  }
}
