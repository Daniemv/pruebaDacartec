import { BannerInterface } from './../../interfaces/banner.interface';
import { DetailInterface } from './../../interfaces/detail.interface';
import { Component, Input, OnChanges } from '@angular/core';
import { ModalMapper } from 'src/app/mappers/modal-mapper';
import { SourceDataService } from 'src/app/services/source-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  @Input() itemDetail: DetailInterface;
  @Input() index: number;

  loading = false;
  carouselData: BannerInterface[] = [];

  constructor(private sourceDataService: SourceDataService, private modalMapper: ModalMapper) { }

  ngOnChanges(): void {
    this.getModalData(this.index);
  }

  getModalData(index: number): void {
    this.loading = true;
    this.sourceDataService.getDetail(index).subscribe(data => {
      this.itemDetail = data;
      this.itemDetail.features = this.itemDetail.features.sort(((item1, item2) => item1.order - item2.order));
      this.carouselData = this.modalMapper.transformDetailDataToCarouselData(data);
     if (this.carouselData.length === 0) {
        this.carouselData = [{location: '/assets/not_found_image.jpg'}];
      }
      this.loading = false;
    });
  }

}
