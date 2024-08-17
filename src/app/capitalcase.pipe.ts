import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalcase'
})
export class CapitalcasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length>0){
      let firstChar=value[0].toUpperCase();
      const remain=value.substring(1,value.length);
      value=firstChar+remain;
    }
    return value;
  }

}
