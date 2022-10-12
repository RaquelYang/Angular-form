import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyOneError'
})
export class OnlyOneErrorPipe implements PipeTransform {

  transform(allErrors: any, errorPriority: string[]): any {

    if (!allErrors) {
      return null;
    }

    let onlyOneError: any = {};

    for (let error of errorPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error] ;
        break;
      }
    }
    return onlyOneError;
  }

}
