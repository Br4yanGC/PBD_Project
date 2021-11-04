import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UserInterfaceComponent } from './user-interface/user-interface/user-interface.component';
import { AseoYLimpiezaComponent } from './aseo-y-limpieza/aseo-y-limpieza/aseo-y-limpieza.component';
import { BebidasComponent } from './bebidas/bebidas/bebidas.component';
import { CarnesYEmbutidosComponent } from './carnes-y-embutidos/carnes-y-embutidos/carnes-y-embutidos.component';
import { DulcesYSnacksComponent } from './dulces-y-snacks/dulces-y-snacks/dulces-y-snacks.component';
import { FrutasYVerdurasComponent } from './frutas-y-verduras/frutas-y-verduras/frutas-y-verduras.component';
import { UtilesEscolaresComponent } from './utiles-escolares/utiles-escolares/utiles-escolares.component';
import { ViveresComponent } from './viveres/viveres/viveres.component';
import { ProductDeleteComponent } from './product-delete/product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view/product-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user-interface', component: UserInterfaceComponent},
  { path: 'user-interface/view/:product_id', component: ProductViewComponent},
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'user-interface/aseo-y-limpieza', component: AseoYLimpiezaComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/aseo-y-limpieza/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/aseo-y-limpieza/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },

  { path: 'user-interface/bebidas', component: BebidasComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/bebidas/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/bebidas/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },
  
  { path: 'user-interface/carnes-y-embutidos', component: CarnesYEmbutidosComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/carnes-y-embutidos/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/carnes-y-embutidos/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },

  { path: 'user-interface/dulces-y-snacks', component: DulcesYSnacksComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/dulces-y-snacks/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/dulces-y-snacks/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },
  
  { path: 'user-interface/frutas-y-verduras', component: FrutasYVerdurasComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/frutas-y-verduras/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/frutas-y-verduras/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },
  
  { path: 'user-interface/utiles-escolares', component: UtilesEscolaresComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/utiles-escolares/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/utiles-escolares/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },

  { path: 'user-interface/viveres', component: ViveresComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/viveres/delete/:user_id/:product_id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'user-interface/viveres/edit/:product_id', component: ProductEditComponent, canActivate: [AuthGuard] },
]

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
