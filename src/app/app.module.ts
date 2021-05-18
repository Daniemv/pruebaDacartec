import { SharedModule } from './shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ClaimComponent } from './components/claim/claim.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
