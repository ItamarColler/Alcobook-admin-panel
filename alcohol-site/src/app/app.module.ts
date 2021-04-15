import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MaterialModule } from './material-module';
import { EditProductComponent } from './components/product/edit-product/edit-product.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    ProductTableComponent,
    UserTableComponent,
    UserDetailsComponent,
    ProductDetailsComponent,
    NavigationComponent,
    LoginComponent,
    StatisticsComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
