export class StringCalculator {
  add(input:string){
    if (input.length === 0) {
      return 0;
    }
    if (input.includes(',')) {
      const parsedNumbers = input.split(',').map(x=>Number.parseInt(x));
      return parsedNumbers.reduce((total, n)=> total+n);
    }
    return Number.parseInt(input);
  }
  
};






