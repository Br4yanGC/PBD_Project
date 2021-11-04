import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ViveresComponent } from './viveres/viveres/viveres.component';
import { BebidasComponent } from './bebidas/bebidas/bebidas.component';
import { UtilesEscolaresComponent } from './utiles-escolares/utiles-escolares/utiles-escolares.component';
import { AseoYLimpiezaComponent } from './aseo-y-limpieza/aseo-y-limpieza/aseo-y-limpieza.component';
import { FrutasYVerdurasComponent } from './frutas-y-verduras/frutas-y-verduras/frutas-y-verduras.component';
import { CarnesYEmbutidosComponent } from './carnes-y-embutidos/carnes-y-embutidos/carnes-y-embutidos.component';
import { DulcesYSnacksComponent } from './dulces-y-snacks/dulces-y-snacks/dulces-y-snacks.component';
import { UserInterfaceComponent } from './user-interface/user-interface/user-interface.component';
import { ProductViewComponent } from './product-view/product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete/product-delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViveresComponent,
    BebidasComponent,
    UtilesEscolaresComponent,
    AseoYLimpiezaComponent,
    FrutasYVerdurasComponent,
    CarnesYEmbutidosComponent,
    DulcesYSnacksComponent,
    UserInterfaceComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
