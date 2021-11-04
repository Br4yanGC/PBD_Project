import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-viveres',
  templateUrl: './viveres.component.html',
  styleUrls: ['./viveres.component.scss']
})
export class ViveresComponent implements OnInit {
  products: any[] = [];
  product_type: any="viveres";
  constructor(
    private productsServiceService: ProductsServiceService,
    private router: Router,
    public authService: AuthService
  ) { }
  ngOnInit(): void {
    this.productsServiceService.getProductsByType(this.authService.getCurrentUser().user_id, this.product_type).subscribe( (data) => {
      this.products = data;
    })
  }
  deleteProduct(user_id: any, product_id: any){
    this.router.navigate(['/user-interface/viveres/delete', this.authService.getCurrentUser().user_id, product_id])
  }
}
