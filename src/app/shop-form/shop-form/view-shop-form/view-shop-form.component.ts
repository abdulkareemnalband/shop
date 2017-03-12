import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ShopFormBuilderService} from "../../shop-form-builder.service";
import {Observable} from "rxjs";
import {ISearchResult} from "../../isearch-result";

@Component({
  selector: 'shop-view-shop-form',
  templateUrl: './view-shop-form.component.html',
  styleUrls: ['./view-shop-form.component.scss']
})
export class ViewShopFormComponent implements OnInit {

  public form:FormGroup;
  public searchedItems:Observable<ISearchResult[]>;
  public result:Array<any>;

  constructor(private _fb:ShopFormBuilderService) { }

  ngOnInit() {
    this.result = null;
    this.form = new FormGroup({
      searchTerm:new FormControl('',Validators.required)
    });
    this.form.valueChanges.subscribe((word) =>{
      this.searchedItems = this._fb.searchItems(word.searchTerm);
    });
  }

  public displayFn(selected:ISearchResult):string{
    return selected? selected.Name : null;
  }

  public searchSubmit(){
    this._fb.retrive(this.form.value.searchTerm.id).subscribe((data) => this.result = data);
  }
}
