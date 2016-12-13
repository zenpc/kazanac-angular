import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from './route.routing'; 

import { AppComponent }  from './app.component';
import { MenuComponent} from '../component/menu/menu.component';
import { FooterComponent } from '../component/footer/footer.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
 
@NgModule({
  imports:      [ BrowserModule, RoutesModule],
  declarations: [ AppComponent , MenuComponent, DashboardComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
