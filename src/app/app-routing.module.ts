import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component:HomePageComponent
      },
      {
        path:'shop',
        loadChildren:'app/shop-form/shop-form.module#ShopFormModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
