import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-utiles-escolares',
  templateUrl: './utiles-escolares.component.html',
  styleUrls: ['./utiles-escolares.component.scss']
})
export class UtilesEscolaresComponent implements OnInit {
  products: any[] = [];
  user_id: any=1;
  product_type: any="utiles escolares";
  constructor(
    private productsServiceService: ProductsServiceService,
    private router: Router
  ) { }
  ngOnInit(): void {
    //Possbile error with 'this.user_id'
    this.productsServiceService.getProductsByType(this.user_id, this.product_type).subscribe( (data) => {
      this.products = data;
    })
  }
  deleteProduct(user_id: any, product_id: any){
    this.router.navigate(['/user-interface/utiles-escolares/delete', this.user_id, product_id])
  }
}
