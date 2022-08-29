import { FormControl, ValidationErrors } from "@angular/forms";

export class CartifyValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors {

    // check if string only contains whitespace
    if (control.value != null && control.value.trim().length === 0) {
      // invalid, return error object
      return { notOnlyWhitespace: true }; // The HTML template will check for this error key
    } 
    else {
      return null;  // valid, return null
    }
  }
  
}
