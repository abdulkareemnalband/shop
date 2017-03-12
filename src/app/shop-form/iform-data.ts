import {IFieldDescription} from './ifield-description';
import {FormGroup} from '@angular/forms';
export interface IFormData {
  format: IFieldDescription[],
  form: FormGroup
}
