import { Component } from '@angular/core';
import { LocalStorageService } from 'src/scripts/LocalStorage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  items: number[] = this.getItems();
  sum: number = this.getSum();
  total_num: number = this.getTotal();

  constructor(private localStorageService: LocalStorageService) {}

  ionViewDidEnter() {
    console.log('rendering page 2');
    this.items = this.getItems();
    this.sum = this.getSum();
    this.total_num = this.getTotal();
  }

  getSum() {
    if (this.items.length <= 0) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  getTotal() {
    return this.items.length;
  }

  getItems(): number[] {
    const it = this.localStorageService.getAllItems();
    console.log(it);
    return it;
  }
}
