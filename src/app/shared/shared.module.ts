import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { SearcherComponent } from './searcher/searcher.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CarouselComponent } from '../components/carousel/carousel.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    ModalComponent,
    SearcherComponent,
    CategoryFilterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    ModalComponent,
    SearcherComponent,
    CategoryFilterComponent
  ]
})
export class SharedModule { }
