import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ShopFormBuilderService} from '../../shop-form-builder.service';
import {IFormData} from '../../iform-data';
import {Observable} from "rxjs";
import {MdAutocomplete, MdDialog} from "@angular/material";
import {SuccessDialogComponent} from "./success-dialog/success-dialog.component";

@Component({
  selector: 'shop-insert-shop-form',
  templateUrl: './insert-shop-form.component.html',
  styleUrls: ['./insert-shop-form.component.scss']
})
export class InsertShopFormComponent implements OnInit {

  @ViewChild('autocompleteTemplateRefId') private autoc: MdAutocomplete;

  public formData: IFormData = null;
  private submitPressed: boolean = false;

  public itemType: FormGroup;
  public itemTypes: string[] = ['tv', 'radio', 'phone'];
  public filteredOptions: Observable<string[]>;

  constructor(private _fb: ShopFormBuilderService, private dialog: MdDialog) {
  }

  ngOnInit() {
    this.itemType = new FormGroup({item: new FormControl('',Validators.required)});
    this.filteredOptions = this.itemType.valueChanges.startWith(null).map((val) => {
      let x = val ? this.filter(val.item) : this.itemTypes.slice();
      console.log(val, x);
      return x;
    });

  }

  filter(val: string): string[] {
    return this.itemTypes.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  isValid(control: string): boolean {
    let formControl: AbstractControl = this.formData.form.get(control);
    return (formControl.dirty || this.submitPressed) && formControl.invalid;
  }

  onSubmit(): void {
    this.submitPressed = true;
    if(!this.formData || this.formData.form.invalid){
      return;
    }
    console.log('submit callled');
    this.dialog.open(SuccessDialogComponent , {data:this.formData , width:"500px"});
  }

  loadForm(): void {
    if(this.itemType.invalid){
      return;
    }
    let item: string = this.itemType.value.item;
    this._fb.getForm(item).subscribe((data): void => {
      this.formData = data;
    })
  }
}
