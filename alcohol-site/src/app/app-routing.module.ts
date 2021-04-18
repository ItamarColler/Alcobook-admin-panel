import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UserComponent } from './components/user/user.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

const routes: Routes = [
  {
    path: 'users', component: UserComponent, children: [
    ]
  },
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

