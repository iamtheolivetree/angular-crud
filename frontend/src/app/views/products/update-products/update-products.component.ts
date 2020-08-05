import { ProductService } from './../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto alterado com sucesso!')
      this.router.navigate(['/product/read'])
    })
  }

  cancel(): void {
    this.router.navigate(['/product/read'])
  }

}
