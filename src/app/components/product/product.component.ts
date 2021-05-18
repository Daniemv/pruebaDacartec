import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges {

  @Input() productData: ProductInterface[] = [];
  originalProductData: ProductInterface[] = [];

  showNoProducts = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.productData = changes.productData.currentValue;
    this.originalProductData = [...this.productData];
  }

  setNoProducts(show: boolean): void {
    this.showNoProducts = show;
  }
}
