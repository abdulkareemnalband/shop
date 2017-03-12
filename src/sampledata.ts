import {IFieldDescription} from "./app/shop-form";
import {Observable, BehaviorSubject} from "rxjs";
import {ISearchResult} from "./app/shop-form/isearch-result";
import {items} from "./sampleitems";
const tv: IFieldDescription[] = [
  {
    "caption": "Name",
    "type": "text",
    "mandatory": true,
    "defaultValue": "",
    "validationMessage": "Name is mandatory"
  },
  {
    "caption": "Description",
    "type": "text",
    "mandatory": true,
    "defaultValue": "Please enter something here....",
    "validationMessage": "Oops you cant have it empty"
  },
  {
    "caption": "Height",
    "type": "int",
    "mandatory": false,
    "defaultValue": "",
    "validationMessage": ""
  },
  {
    "caption": "Width",
    "type": "int",
    "mandatory": false,
    "defaultValue": "Yes",
    "validationMessage": ""
  },
  {
    "caption": "IsSmart",
    "type": "bool",
    "mandatory": true,
    "defaultValue": "false",
    "validationMessage": ""
  }
];

const phone: IFieldDescription[] = [
  {
    "caption": "Name",
    "type": "text",
    "mandatory": true,
    "defaultValue": "",
    "validationMessage": "Name is mandatory"
  },
  {
    "caption": "Manufacturer",
    "type": "text",
    "mandatory": true,
    "defaultValue": "Please enter manufracturer",
    "validationMessage": "Manufacturer"
  },
  {
    "caption": "Weight",
    "type": "int",
    "mandatory": false,
    "defaultValue": "In grams",
    "validationMessage": ""
  },
  {
    "caption": "IsFlip",
    "type": "bool",
    "mandatory": false,
    "defaultValue": "Yes",
    "validationMessage": ""
  },
  {
    "caption": "IsSmart",
    "type": "bool",
    "mandatory": true,
    "defaultValue": "false",
    "validationMessage": ""
  }
];

const radio: IFieldDescription[] = [
  {
    "caption": "Name",
    "type": "text",
    "mandatory": true,
    "defaultValue": "",
    "validationMessage": "Name is mandatory"
  },
  {
    "caption": "Description",
    "type": "text",
    "mandatory": true,
    "defaultValue": "Please enter something here....",
    "validationMessage": "Oops you cant have it empty"
  },
  {
    "caption": "MinFrequency",
    "type": "int",
    "mandatory": false,
    "defaultValue": "In MHz",
    "validationMessage": ""
  },
  {
    "caption": "MaxFrequency",
    "type": "int",
    "mandatory": false,
    "defaultValue": "In MHz",
    "validationMessage": ""
  },
];

function string2type (item: string):IFieldDescription[] {
  let data: IFieldDescription[];
  if (item === 'tv') {
    data = tv;
  }
  if (item === 'radio') {
    data = radio;
  }
  if (item === 'phone') {
    data = phone;
  }
  return data;
};
export function getFormData(item: string): Observable<IFieldDescription[]> {
  let data = string2type(item);
  let subject: BehaviorSubject<IFieldDescription[]> = new BehaviorSubject<IFieldDescription[]>(data);
  return subject.asObservable();
}

export function search(word: string): Observable<ISearchResult[]> {
  let x = items.filter(option => {
    let r = new RegExp(`^${word}`, 'gi');
    return r.test(option.type) || r.test(option.Name);
  }).map((v) => { return {id:v.id,Name:v.Name,type:v.type}});
  let result: BehaviorSubject<ISearchResult[]> = new BehaviorSubject(x)
  return result.asObservable();
}

export function retriveData(id:number):Observable<any[]>{
  let item:any = items.find((i)=> i.id === id);
  let type = string2type(item.type);
  let result:Array<any> = type.map((t)=>{return{key:t.caption,value:item[t.caption]}});
  let subt: BehaviorSubject<ISearchResult[]> = new BehaviorSubject(result);
  return subt.asObservable();
}
