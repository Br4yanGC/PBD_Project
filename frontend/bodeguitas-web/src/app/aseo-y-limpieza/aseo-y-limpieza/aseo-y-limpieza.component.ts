import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-aseo-y-limpieza',
  templateUrl: './aseo-y-limpieza.component.html',
  styleUrls: ['./aseo-y-limpieza.component.scss']
})
export class AseoYLimpiezaComponent implements OnInit {
  products: any[] = [];
  product_type: any="aseo y limpieza";
  constructor(
    private productsServiceService: ProductsServiceService,
    private router: Router,
    public authService: AuthService,
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
    this.router.navigate(['/user-interface/aseo-y-limpieza/delete', this.authService.getCurrentUser().user_id, product_id])
  }
}
