import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/_services/products-service.service';

@Component({
  selector: 'app-dulces-y-snacks',
  templateUrl: './dulces-y-snacks.component.html',
  styleUrls: ['./dulces-y-snacks.component.scss']
})
export class DulcesYSnacksComponent implements OnInit {
  products: any[] = [];
  user_id: any=1;
  product_type: any="dulces y snacks";
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
    this.router.navigate(['/user-interface/dulces-y-snacks/delete', user_id, product_id])
  }
}
