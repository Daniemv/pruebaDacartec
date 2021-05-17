import { MainInterface } from './interfaces/main.interface';
import { Component } from '@angular/core';
import { SourceDataService } from './services/source-data.service';
import { BannerInterface } from './interfaces/banner.interface';
import { ProductInterface } from './interfaces/product.interface';
import { ClaimInterface } from './interfaces/claim.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  carouselData: BannerInterface[] = [];
  productData: ProductInterface[] = [];
  claimData: ClaimInterface[] = [];

  constructor(private sourceDataService: SourceDataService) { this.getAllData(); }

  getAllData(): void {
    this.sourceDataService.getMain().subscribe(data => {
      this.carouselData = data.banners;
      this.productData = data.products;
      this.claimData = data.claims;
    });
  }
}
