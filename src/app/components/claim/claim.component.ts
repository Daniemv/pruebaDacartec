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
    this.claimData = changes.claimData.currentValue;
  }

}
