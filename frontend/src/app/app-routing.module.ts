import { DeleteProductsComponent } from './views/products/delete-products/delete-products.component';
import { UpdateProductsComponent } from './views/products/update-products/update-products.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { ReadProductsComponent } from './views/products/read-products/read-products.component'
import { CreateProductsComponent } from './views/products/create-products/create-products.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/read',
    component: ReadProductsComponent
  },
  {
    path: 'product/create',
    component: CreateProductsComponent
  },
  {
    path: 'product/update/:id',
    component: UpdateProductsComponent
  },
  {
    path: 'product/delete/:id',
    component: DeleteProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
