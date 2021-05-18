import { ProductInterface } from 'src/app/interfaces/product.interface';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnChanges {

  @Input() productData: ProductInterface[];
  @Output() productDataChange = new EventEmitter();
  productCategoryCollection: string[] = [];


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.productData = changes.productData.currentValue;
    this.groupCategories();
  }

  selectCategory(categorySelected: string): void {
    let productsHaveCategorySelected: ProductInterface[] = [];
    this.productData.forEach(product => {
      if (product.categories.includes(categorySelected)) {
        productsHaveCategorySelected.push(product);
      }
    });
    console.log(productsHaveCategorySelected);
    this.productDataChange.emit(productsHaveCategorySelected);
  }

  groupCategories(): void {
    this.productData.forEach(product => {
      product.categories.forEach(category => {
        this.productCategoryCollection.push(category);
        this.productCategoryCollection = [... new Set(this.productCategoryCollection)];
      });
    });
  }
}
