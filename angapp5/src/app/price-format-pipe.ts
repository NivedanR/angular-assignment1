import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone:true
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number): string {
    if(isNaN(value)){
      return 'Not a number';
    }
    return `${value.toFixed(2)} INR`;
  }

}
