import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../../services/product.service'
import { Router } from '@angular/router'
import { Product } from '../product.model'

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrls: ['./read-products.component.css']
})
export class ReadProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService 
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(product => {
      this.products = product
    })
  }

  natigateToProductCreate(): void {
    this.router.navigate(['/product/create'])
  }

}
