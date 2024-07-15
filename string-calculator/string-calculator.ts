export class StringCalculator {
  add(input: string) {
    if (input.length === 0) {
      return 0;
    };

    let delimiter: string | RegExp = /,|\n/; // default delimiter
    if ( this.hasCustomDelimiter(input) ) {
      delimiter =  this.extractCustomDelimiter(input);
      input = this.removeCustomDelimiterHeader(input); 
    } 

    const parsedNumbers = input.split(delimiter).map( x => Number.parseInt(x) );
    const negativeNumbersArray = parsedNumbers.filter(element => element < 0);  

    if (negativeNumbersArray.length > 0) { 
      throw `error: negatives not allowed: ${negativeNumbersArray.join(',')}`;
    } 

    const newNumbersArray = parsedNumbers.filter(element => element <= 1000);  

    return newNumbersArray.reduce((accumulator, item) => accumulator + item);  
  };

  hasCustomDelimiter(input:string) {
    return input.startsWith('//');
  };

  extractCustomDelimiter(input:string):string {
    // const regex = /\/\/([^*])\\n/gm;
    // const newDelimiterArray = input.match(regex) || [];
    // const customDelimiter = newDelimiterArray[1];
    const customDelimiter = input[2];
    return customDelimiter;
  };

  removeCustomDelimiterHeader(input:string):string {
    return input.slice(3);  
  };
};