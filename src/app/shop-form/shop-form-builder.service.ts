import {Injectable, ClassProvider} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import {IFieldDescription} from './ifield-description';
import {formatData} from '../../sampledata';
import {forEach} from "@angular/router/src/utils/collection";
import {IFormData} from "./iform-data";

@Injectable()
export class ShopFormBuilderService {

  constructor(private _fb: FormBuilder, private http: Http) {
  }

  public getForm(itemCode: string): IFormData {
    let sampleData:IFieldDescription[] = formatData;
    console.log(sampleData);
    let fg:any ={};
    for(let field of sampleData){
      fg[field.caption] = []
    }
    let form:FormGroup = this._fb.group(fg);
    return {
      format:sampleData,
      form:form
    };

  }
}


export const SHOPFORMBUILDERSERVICE_PROVIDER: ClassProvider =
  {provide: ShopFormBuilderService, useClass: ShopFormBuilderService};
