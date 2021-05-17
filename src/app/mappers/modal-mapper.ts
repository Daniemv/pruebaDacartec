import { BannerInterface } from './../interfaces/banner.interface';
import { DetailInterface } from './../interfaces/detail.interface';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModalMapper {

  constructor() { }

  transformDetailDataToCarouselData(detailData: DetailInterface): BannerInterface[] {
    const newBannerCollection: BannerInterface[] = [];
    detailData.images.forEach(image => {
      let newBanner: BannerInterface = { location: '' };
      newBanner.location = image;
      newBannerCollection.push(newBanner);
    });
    return newBannerCollection;
  }
}
