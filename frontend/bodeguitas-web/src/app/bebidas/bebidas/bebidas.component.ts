import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {
  products: any[] = [];
  product_type: any="bebidas";
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

  addProductCart(values: any){
    this.productsServiceService.insertToCart(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user-interface']);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteProduct(user_id: any, product_id: any){
    this.router.navigate(['/user-interface/bebidas/delete', this.authService.getCurrentUser().user_id, product_id])
  }
}
