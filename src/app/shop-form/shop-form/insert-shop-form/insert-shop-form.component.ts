import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ShopFormBuilderService} from "../../shop-form-builder.service";
import {IFormData} from "../../iform-data";

@Component({
  selector: 'shop-insert-shop-form',
  templateUrl: './insert-shop-form.component.html',
  styleUrls: ['./insert-shop-form.component.scss']
})
export class InsertShopFormComponent implements OnInit {

  public formData:IFormData= null;
  constructor(private _fb:ShopFormBuilderService) { }

  ngOnInit() {
    this.formData = this._fb.getForm('');
  }

}
