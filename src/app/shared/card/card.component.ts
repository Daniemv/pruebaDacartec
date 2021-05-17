import { ProductInterface } from './../../interfaces/product.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ClaimInterface } from 'src/app/interfaces/claim.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() items: ProductInterface[] | ClaimInterface[] = [];
  @Input() hasButton: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
