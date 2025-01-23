import { Component, ViewEncapsulation } from '@angular/core';
import { recentSales } from '../../data/data';

@Component({
  selector: 'app-root',
  styleUrls: ['opensource-demo.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'opensource-demo.html',
})
export class OpenSourceDemo {
  editing = {};
  rows = recentSales;

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }
}
