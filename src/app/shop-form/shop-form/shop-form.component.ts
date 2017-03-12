import { Component, OnInit } from '@angular/core';
import {ShopFormBuilderService} from "../shop-form-builder.service";

@Component({
  selector: 'shop-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelect():void{
  }
}
