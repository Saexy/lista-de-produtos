import { Component, OnInit } from '@angular/core';

import { Product } from 'src/product';
import { Products } from '../../mock-products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = Products;
  selectedProduct?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onClear(): void {
    this.selectedProduct = undefined;
  }

}
