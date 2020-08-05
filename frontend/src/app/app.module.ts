import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/templates/header/header.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { FooterComponent } from './components/templates/footer/footer.component'
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ReadProductsComponent } from './views/products/read-products/read-products.component';
import { CreateProductsComponent } from './views/products/create-products/create-products.component';
import { UpdateProductsComponent } from './views/products/update-products/update-products.component';
import { DeleteProductsComponent } from './views/products/delete-products/delete-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductTableComponent,
    ReadProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
