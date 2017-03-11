import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShopFormComponent} from './shop-form/shop-form.component';
import {InsertShopFormComponent} from './shop-form/insert-shop-form/insert-shop-form.component';
import {ViewShopFormComponent} from './shop-form/view-shop-form/view-shop-form.component';

const routes: Routes = [
  { path: '',
    component: ShopFormComponent,
    children:[
      {
        path:'insert',
        component:InsertShopFormComponent
      },
      {
        path:'view',
        component:ViewShopFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopFormRoutingModule { }

