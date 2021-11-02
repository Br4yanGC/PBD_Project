import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-carnes-y-embutidos',
  templateUrl: './carnes-y-embutidos.component.html',
  styleUrls: ['./carnes-y-embutidos.component.scss']
})
export class CarnesYEmbutidosComponent implements OnInit {
  products: any[] = [];
  user_id: any=1;
  product_type: any="carnes y embutidos";
  constructor(
    private productsServiceService: ProductsServiceService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.productsServiceService.getProductsByType(this.user_id, this.product_type).subscribe( (data) => {
      this.products = data;
    })
  }
  deleteProduct(user_id: any, product_id: any){
    this.router.navigate(['/user-interface/carnes-y-embutidos/delete', this.user_id, product_id])
  }
}
