import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe, DecimalPipe} from '@angular/common';

@Pipe({
  name: 'format'
})
export class Format implements PipeTransform  {
  
  
  transform(input:Number, args:any): any {
    var pipeArgs = args.split(':');
    for(var i = 0; i < pipeArgs.length; i++){
      pipeArgs[i] = pipeArgs[i].trim(' ');
    }
    
    switch(pipeArgs[0].toLowerCase()) {
        case 'number':
            default:
        return input;
    }
  }
}