import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-carnes-y-embutidos',
  templateUrl: './carnes-y-embutidos.component.html',
  styleUrls: ['./carnes-y-embutidos.component.scss']
})
export class CarnesYEmbutidosComponent implements OnInit {
  products: any[] = [];
  product_type: any="carnes y embutidos";
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
    this.router.navigate(['/user-interface/carnes-y-embutidos/delete', this.authService.getCurrentUser().user_id, product_id])
  }
}
