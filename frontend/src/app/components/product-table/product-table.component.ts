import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../views/products/product.model'

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input() products: Product[]
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor() { }

  ngOnInit(): void {
  }

}
