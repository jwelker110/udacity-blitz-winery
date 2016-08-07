export module CreditCardValidator {

    /**
     * Validator for the credit card field
     * @param control - the credit card FormControl
     * @returns {{invalidCC: boolean}} - errors, if any
     */
    export function validateCard(control: any): {[s: string]: boolean} {
        if(!validateCreditCard(control.value)) {
            return {'invalidCC': true};
        }
    }

    /**
     * This performs a simple check using Luhn's algorithm to determine
     * whether the credit card number is valid. This is simply to provide feedback
     * to prevent user error.
     * Thanks, https://en.wikipedia.org/wiki/Luhn_algorithm
     * @param cardNum
     * @returns {boolean}
     */
    function validateCreditCard(cardNum: number): boolean {
        let checkDigit = cardNum % 10;
        let sums = sumOfDoubleEvenPlace(cardNum) + sumOfOddPlace(cardNum);
        if((sums) % 10 != 0) {return false;}

        return ((sums - checkDigit) * 9) % 10 == checkDigit;
    }

    /**
     * Given a number, sums the doubled value of each even-placed digit, starting from the right
     * Example: passing 1234 would return 8
     * @param num {number} - the number
     * @returns {number} - the sum of the doubled value of each even-placed digit
     */
    function sumOfDoubleEvenPlace(num: number): number {
        var sum = 0;
        var count = 0;
        while(num > 0) {
            num = Math.floor(num / 10);
            if(count % 2 == 0) {
                sum += getDigit((num % 10) * 2);
            }
            count++;
        }

        return sum;
    }

    /**
     * Given a number, sums the value of each odd-placed digit, starting from the right
     * Example: passing 1234 would return 6
     * @param num {number} - the number
     * @returns {number} - the sum of the odd-placed digits
     */
    function sumOfOddPlace(num: number): number {
        var sum = 0;
        var count = 0;
        while(num > 0) {
            if(count % 2 == 0) {
                sum += getDigit(Math.floor(num % 10));
            }
            num = Math.floor(num / 10);
            count++;
        }

        return sum;
    }

    /**
     * Retrieve the single digit, and if a double digit, return the sum of both digits
     * @param num {number} - the digit to retrieve
     * @returns {number} - the digit
     */
    function getDigit(num: number): number {
        return num > 9 ? (num % 10) + Math.floor(num / 10) : num;
    }

    /**
     * Determines whether the provided number contains an appropriate prefix
     * @param num {number} - the cc number
     * @param p {number} - the prefix to match to
     * @returns {boolean} - true if a match, else false
     */
    function prefixMatched(num: number, p: number) {
        return p == getPrefix(num, p);
    }

    /**
     * Retrieves the size (width) of num
     * @param num {number} - the number to measure
     * @returns {number} - size of num
     */
    function getSize(num: number): number {
        var size = 0;
        while(num != 0) {
            num = Math.floor(num / 10);
            size++;
        }
        return size;
    }

    /**
     * Retrieves the prefix of the provided cc number
     * @param num {number} - the cc number
     * @param n {number} - the
     * @returns {number}
     */
    function getPrefix(num: number, n: number): number {
        let sizeNum = getSize(num);
        if(sizeNum < n) {return num;}

        let prefix = 0;

        for(var i = sizeNum - 1; i > 0; i--) {
            if(getSize(prefix) == n) return n;

            var divisor = 1;
            prefix *= 10;
            for(let j = i; j > 0; j--) {
                divisor *= 10;
            }
            prefix += Math.floor(num / divisor) % 10;
        }

        prefix += num % 10;
        return prefix;
    }
}