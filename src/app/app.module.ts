import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenSourceDemo } from './opensource-demo/opensource-demo';
// import NgxDatatable modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexGridDemo } from './flexgrid-demo/flexgrid-demo';
// import Wijmo modules
import { WjGridModule } from '@mescius/wijmo.angular2.grid';

// apply Wijmo license key
import { setLicenseKey } from '@mescius/wijmo';
setLicenseKey('your license key goes here');

@NgModule({
  declarations: [OpenSourceDemo, FlexGridDemo],
  imports: [BrowserModule, NgxDatatableModule, WjGridModule],
  providers: [],
  // bootstrap: [OpenSourceDemo]
  bootstrap: [FlexGridDemo],
})
export class AppModule {}
