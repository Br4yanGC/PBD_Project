import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-aseo-y-limpieza',
  templateUrl: './aseo-y-limpieza.component.html',
  styleUrls: ['./aseo-y-limpieza.component.scss']
})
export class AseoYLimpiezaComponent implements OnInit {
  products: any[] = [];
  user_id: any=1;
  product_type: any="aseo y limpieza";
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
    this.router.navigate(['/user-interface/aseo-y-limpieza/delete', this.user_id, product_id])
  }
}
