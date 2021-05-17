import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BannerInterface } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges {

  @Input() carouselData: BannerInterface[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.carouselData = changes.carouselData.currentValue;
  }

}
