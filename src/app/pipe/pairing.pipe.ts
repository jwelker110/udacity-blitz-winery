import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pairings'})
export class PairingPipe implements PipeTransform {

    transform(value: string[], args: string[]) : string {
        let pairingString = value[0];
        for(var i = 1, l = value.length; i < l - 1; i++) {
            pairingString += ', ' + value[i];
        }
        if(i > 1) {
            // we append 'and' to the string
            // because i
            pairingString += ' and ' + value[i];
        }
        return pairingString;
    }
}