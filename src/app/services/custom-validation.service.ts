import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  constructor() {}

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^0?7(0|1|2|5|6|7|8)[0-9]{7}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidMobileNumber: true };
    };
  }
}
