import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClaimInterface } from 'src/app/interfaces/claim.interface';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnChanges {

  @Input() claimData: ClaimInterface[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.claimData = changes.claimData.currentValue.sort(((item1: ClaimInterface, item2: ClaimInterface) => item1.order - item2.order)); // Ordena los claims por el nº de order (1, 2, 3...)
  }

}
