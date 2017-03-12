import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {IFormData} from "../../../iform-data";

@Component({
  selector: 'shop-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  public data:Array<{name:string,value:any}>;
  constructor(public dialogRef:MdDialogRef<SuccessDialogComponent>) { }

  ngOnInit() {
    let _data : IFormData = this.dialogRef.config.data;
    let fields = _data.format;
    let values = _data.form.value;
    this.data = fields.map( (field) =>{ return {name:field.caption , value:values[field.caption]}});
  }

}
