import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../_services/products-service.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  product_id: any;
  products: any[] = [];
  suma: any=0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsServiceService: ProductsServiceService,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.productsServiceService.getProductsCart(this.authService.getCurrentUser().user_id).subscribe( (data) => {
      this.products = data;
      for(let n in data){
        this.suma = this.suma  + data[n]['product_price'];
      }
      
      //this.suma = this.suma + data.get('product_price');
    })
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.product_id = data.get('product_id')
      }
    );
  }

  //DELETE SHOULD BE CHANGED
  //deleteProduct(user_id: any, product_id: any){
  //  this.router.navigate(['/user-interface/aseo-y-limpieza/delete', this.authService.getCurrentUser().user_id, product_id])
  //}

  deleteProductCart(user_id: any, product_id: any) {
    this.productsServiceService.deleteProductCart(this.authService.getCurrentUser().user_id, product_id).subscribe(
      response => {
        console.log(response);
        window.location.reload();
      },
      error => {
        console.error(error)
      }
    );
  }

}
