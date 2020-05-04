import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {UserService} from '../service/user-service';

export function blackListedNameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.verifyNameOnBlackList(control.value)
      .pipe(distinctUntilChanged())
      .pipe(debounceTime(500))
      .pipe(map(res => {
        return (res && res.isNomeExists) ? {nameAlreadyExists: true} : null;
      }));
  };
}
