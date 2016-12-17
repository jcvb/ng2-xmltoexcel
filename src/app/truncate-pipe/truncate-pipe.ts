import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string) : string {
    console.log(value.length);
    console.log(args);
    console.log(parseInt(args, 15));

    let limit = args ? parseInt(args, 10) : 15;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail + value.substring( value.length - 25, value.length) : value;
    
  }
}