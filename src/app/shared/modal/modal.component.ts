import { BannerInterface } from './../../interfaces/banner.interface';
import { DetailInterface } from './../../interfaces/detail.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ModalMapper } from 'src/app/mappers/modal-mapper';
import { SourceDataService } from 'src/app/services/source-data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() itemDetail: DetailInterface;
  @Input() index: number;

  loading = false;
  carouselData: BannerInterface[] = [];
  destroy = false;

  constructor(private sourceDataService: SourceDataService, private modalMapper: ModalMapper) {
    this.destroy = true;
  }

  ngOnInit(): void {
    this.getModalData(this.index);
  }

  getModalData(index: number): void {
    this.loading = true;
    this.sourceDataService.getDetail(index).subscribe(data => {
      this.itemDetail = data;
      this.itemDetail.features = this.itemDetail.features.sort(((item1, item2) => item1.order - item2.order));
      this.carouselData = this.modalMapper.transformDetailDataToCarouselData(data);
      this.loading = false;
    });
  }

}
