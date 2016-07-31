import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'arrayToString'})
export class ArrayToStringPipe implements PipeTransform {

    /**
     * This pipe takes an array of strings and combines them into a single string
     * with comma punctuation
     * @param value - the array of strings
     * @param args - additional arguments
     * @returns {string} - concatenated string
     */
    transform(value: string[], args: string[]) : string {
        let arrayString = value[0] + (value.length > 2 ? ', ' : '');
        for(var i = 1, l = value.length; i < l - 1; i++) {
            arrayString += value[i] + ', ';
        }
        if(i > 1) {
            // we append 'and' to the string
            // because i
            arrayString += ' and ' + value[i];
        }
        return arrayString;
    }
}