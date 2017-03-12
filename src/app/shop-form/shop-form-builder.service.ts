import {Injectable, ClassProvider} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {IFieldDescription} from './ifield-description';
import {getFormData, search, retriveData} from '../../sampledata';
import {forEach} from "@angular/router/src/utils/collection";
import {IFormData} from "./iform-data";
import {Observable} from "rxjs";
import {ISearchResult} from "./isearch-result";

@Injectable()
export class ShopFormBuilderService {

  constructor(private _fb: FormBuilder, private http: Http) {
  }

  public getForm(itemCode: string): Observable<IFormData> {
    return getFormData(itemCode).map( (data) => this.buildForm(data))
  }

  private buildForm(formatData: IFieldDescription[]) {

    function mapTypes(format: IFieldDescription): IFieldDescription {
      let field: IFieldDescription = Object.assign({}, format);
      if(field.type === 'int'){
        field.type = 'number';
      }
      if(field.type === 'bool'){
        if(!field.defaultValue || field.defaultValue === ''
          || field.defaultValue.toLowerCase() === 'false'){
          field.defaultValue = false;
        }
        else {
          field.defaultValue = true;
        }
      }
      return field;
    }
    let _formatData:IFieldDescription[] = formatData.map(mapTypes);
    let fg: any = {};
    for (let field of _formatData) {
      let validator: any[] = [];
      let defalutV: any = '';
      if (field.mandatory) {
        validator = [Validators.required]
      }
      if (field.type === 'bool') {
        defalutV = field.defaultValue
      }
      fg[field.caption] = [defalutV, validator]
    }
    let form: FormGroup = this._fb.group(fg);
    return {
      format: _formatData,
      form: form
    };
  }

  public searchItems(word:string):Observable<ISearchResult[]>{
    return search(word);
  }

  public retrive(id:number):Observable<any[]>{
    return retriveData(id);
  }

}


export const SHOPFORMBUILDERSERVICE_PROVIDER: ClassProvider =
  {provide: ShopFormBuilderService, useClass: ShopFormBuilderService};
