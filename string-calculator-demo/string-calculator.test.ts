// String-Calculator Kata https://osherove.com/tdd-kata-1
// 1. Create a simple String calculator with a method: add(input:string): number 
//   1.1. The add() method can take 0, 1, or 2 numbers and will return their sum
//   (for an empty string it will return 0)
//   1.2. Allow the add() function to handle an unknown amount of numbers
// 2. Allow the add() method to handle new lines between numbers (in addition to commas)
//   2.1. the following input is ok : “1\n2,3” (will equal 6)
//   2.2 the following input does not need to be handled: “1,\n”
// 3. Support different delimiters
//   3.1 to change a delimiter, the beginning of the string will contain a separate 
//    line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” 
//    should return three where the default delimiter is ‘;’ .
// 4. Reject negative numbers
//   4.1 if there are multiple negatives, show all of them in the exception message
// 5. Ignore numbers over 1000  

import { StringCalculator } from "./string-calculator";


describe('string-calculator', () => {
  it('given empty string should return a 0', () => {
    //Arrange
    const input = '';
    const expected = 0;
    const sut = new StringCalculator();
    //Act
    const actual = sut.add(input);
    //Assert 
    expect(actual).toBe(expected);
  })

  test.each([
    {input: '5', expected: 5},
    {input: '20', expected: 20},
    {input: '205', expected: 205},
  ])('given single number should return that number', ({input, expected}) => {
    //Arrange
    const sut = new StringCalculator();
    //Act
    const actual = sut.add(input);
    //Assert 
    expect(actual).toBe(expected);
  })

  test.each([
    {input: '1,3', expected: 4},
    {input: '1,3,5', expected: 9},
    // {input: '20', expected: 20},
    // {input: '205', expected: 205},
  ])('given multiple numbers should return that number', ({input, expected}) => {
    //Arrange
    const sut = new StringCalculator();
    //Act
    const actual = sut.add(input);
    //Assert 
    expect(actual).toBe(expected);
  })

  test('learning', () => {
    expect('1,2'.split(',')).toStrictEqual(['1','2']);
    expect(['1', '2'].map(x=>Number.parseInt(x) )).toStrictEqual([1,2]);
    expect([1,2].reduce((total, n)=> total+n)).toBe(3);
  })

})  




