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

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.productData = changes.productData.currentValue;
    this.originalProductData = [...this.productData];
  }

  searchProduct(termToSearch: string): void {
    if (termToSearch.length > 0) {
      if (this.productData.length === 0) {
        this.search(this.originalProductData, termToSearch);
      }
      this.search(this.productData, termToSearch);
    } else if (termToSearch.length === 0) {
      this.productData = this.originalProductData;
    } else {
      this.productData = [];
    }
  }


  private search(arraySearch: ProductInterface[],termToSearch: string) {
    const newProductDataCollection: ProductInterface[] = [];
    arraySearch.forEach(product => {
      if (product.description.toLowerCase().includes(termToSearch.toLowerCase())) {
        newProductDataCollection.push(product);
        this.productData = newProductDataCollection;
      } else {
        this.productData = [];
      }
    });
  }
}
