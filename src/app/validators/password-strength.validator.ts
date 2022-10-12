import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null
    }

    const hasLowerCase = /[a-z]+/.test(value);
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasLowerCase && hasUpperCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null
  }
}
