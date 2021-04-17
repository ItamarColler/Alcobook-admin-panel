import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

const routes: Routes = [
  {
    path: 'users', component: UserComponent, children: [
    ]
  },
  { path: 'user-details', component: UserDetailsComponent },
  {
    path: 'products', component: ProductComponent, children: [
      { path: 'products/:id', component: ProductDetailsComponent }
    ]
  },
  {
    path: 'statistics', component: StatisticsComponent
  },
  {
    path: 'product-details', component: ProductDetailsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'edit-product', component: EditProductComponent
  },
  {
    path: 'confirm-delete', component: DeleteConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

