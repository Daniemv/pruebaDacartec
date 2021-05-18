import { ProductInterface } from 'src/app/interfaces/product.interface';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnChanges {

  @Input() productData: ProductInterface[];
  @Input() originalProductDataCollection: ProductInterface[];
  @Output() productDataChange = new EventEmitter();
  productCategoryCollection: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.productData = changes.productData.currentValue;
    if (changes.originalProductDataCollection)
        this.originalProductDataCollection = changes.originalProductDataCollection.currentValue;
    this.groupCategories();
  }

  selectCategory(categorySelected: string): void {
    let productsHaveCategorySelected: ProductInterface[] = [];
    if (this.productData.length !== this.originalProductDataCollection.length) {
      this.productData = this.originalProductDataCollection;
    }
    this.productData.forEach(product => {
      if (product.categories.includes(categorySelected)) {
        productsHaveCategorySelected.push(product);
      }
    });
    this.productDataChange.emit(productsHaveCategorySelected);
    if (categorySelected === "") {
      this.productDataChange.emit(this.originalProductDataCollection);
    }
  }

  groupCategories(): void {
    this.productData.forEach(product => {
      product.categories.forEach(category => {
        this.productCategoryCollection.push(category);
        this.productCategoryCollection = [... new Set(this.productCategoryCollection.sort())];
      });
    });
  }
}
