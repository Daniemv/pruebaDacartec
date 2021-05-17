import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Input() productData: ProductInterface[];
  @Input() originalProductData: ProductInterface[];

  @Output() productDataChange = new EventEmitter();
  @Output() originalProductDataChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchProduct(termToSearch: string): void {
    if (termToSearch.length > 0) {
      if (this.productData.length === 0) {
        this.search(this.originalProductData, termToSearch);
      }
      this.search(this.productData, termToSearch);
    } else if (termToSearch.length === 0) {
      this.productData = this.originalProductData;
      this.productDataChange.emit(this.productData);
    } else {
      this.productData = [];
      this.productDataChange.emit(this.productData);
    }
  }


  search(arraySearch: ProductInterface[],termToSearch: string) {
    const newProductDataCollection: ProductInterface[] = [];
    arraySearch.forEach(product => {
      if (product.description.toLowerCase().includes(termToSearch.toLowerCase())) {
        newProductDataCollection.push(product);
        this.productData = newProductDataCollection;
        this.productDataChange.emit(this.productData);
      } else {
        this.productData = [];
        this.productDataChange.emit(this.productData);
      }
    });
  }

}
