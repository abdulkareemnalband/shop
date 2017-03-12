import {Injectable, ClassProvider} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';
import {IFieldDescription} from './ifield-description';
import {formatData} from '../../sampledata';

@Injectable()
export class ShopFormBuilderService {

  constructor(private _fb: FormBuilder, private http: Http) {
  }

  public getForm(itemCode: string): void {
    let sampleData:IFieldDescription[] = formatData;
    console.log(sampleData);
  }
}


export const SHOPFORMBUILDERSERVICE_PROVIDER: ClassProvider =
  {provide: ShopFormBuilderService, useClass: ShopFormBuilderService};
