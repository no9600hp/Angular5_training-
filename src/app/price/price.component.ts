import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: PriceService) { }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
      });
  }

}
