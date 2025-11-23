import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenWordValidator(word: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }

    const hasForbidden = value.toLowerCase().includes(word.toLowerCase());
    return hasForbidden ? { forbiddenWord: { word } } : null;
  };
}
