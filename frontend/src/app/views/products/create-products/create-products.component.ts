import { Component, OnInit } from '@angular/core'
import { ProductService } from './../../../services/product.service'
import { Router } from '@angular/router'
import { Product } from '../product.model'

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso')
      this.router.navigate(['/products'])
    })
  }

}
