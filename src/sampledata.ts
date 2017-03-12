import {IFieldDescription} from './app/shop-form';
import {Observable, BehaviorSubject} from "rxjs";
const tv:IFieldDescription[] = [
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

const phone:IFieldDescription[] = [
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

const radio:IFieldDescription[] = [
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

export function getFormData(item:string):Observable<IFieldDescription[]>{
  let data:IFieldDescription[];
  if(item==='tv'){
    data = tv;
  }
  if(item === 'radio'){
    data = radio;
  }
  if(item === 'phone'){
    data = phone;
  }
  let subject:BehaviorSubject<IFieldDescription[]> = new BehaviorSubject<IFieldDescription[]>(data);
  return subject.asObservable();
}
