import {
  Component,
  NgModule,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

// import Wijmo components
import * as wjcCore from '@mescius/wijmo';
import * as wjcGrid from '@mescius/wijmo.grid';
import { WjGridModule } from '@mescius/wijmo.angular2.grid';
import { recentSales } from '../../data/data';
import * as wjcXlsx from '@mescius/wijmo.xlsx';
import * as wjcGridXlsx from '@mescius/wijmo.grid.xlsx';

@Component({
  selector: 'app-root',
  templateUrl: 'flexgrid-demo.html',
  styleUrls: ['flexgrid-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FlexGridDemo {
  sales: any[];

  // references FlexGrid named 'flex' in the view
  @ViewChild('flex') flex: wjcGrid.FlexGrid;

  // DataSvc will be passed by derived classes
  constructor() {
    this.sales = recentSales;
  }

  load() {
    let fileInput = <HTMLInputElement>document.getElementById('importFile');
    if (fileInput.files[0]) {
      wjcGridXlsx.FlexGridXlsxConverter.loadAsync(
        this.flex,
        fileInput.files[0],
        { includeColumnHeaders: true }
      );
    }
  }

  save() {
    wjcGridXlsx.FlexGridXlsxConverter.saveAsync(
      this.flex,
      {
        includeColumnHeaders: true,
        includeCellStyles: false,
        formatItem: null,
      },
      'FlexGrid.xlsx'
    );
  }
}
