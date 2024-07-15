interface FizzBuzz {
  go(input: number): string;
}

export function createFizzBuzz(): FizzBuzz {
  const isPrime = (input:number):boolean => {
    if (input === 1) return false;
    for (let i = 2; i <= input; i += 1) {
      if (input % i === 0 && input > i) return false;
    };
    return true;
  };
  return {
    go(input) { 
      if (input === 3) return 'Fizz-Whiz';
      if (input === 5) return 'Buzz-Whiz';
      if (input % 15 === 0) return 'Fizz-Buzz';
      if (input % 5 === 0) return 'Buzz';
      if (input % 3 === 0) return 'Fizz'; 
      if (isPrime(input)) return 'Whiz'; 
      return input.toString(); 
    }
  };  
};