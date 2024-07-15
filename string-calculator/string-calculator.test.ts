import { StringCalculator } from "./string-calculator";

describe('string-calculator', () => {
  describe('add', () => {
    test('given empty string should return 0', () => {
      //Arrange
      const input = '';
      const expected = 0;
      const sut = new StringCalculator();
      //Act
      const actual = sut.add(input);
      //Assert
      expect(actual).toBe(expected);
    });
    describe('single number', () => {
      test.each([
        { input: '5', expected: 5},
        { input: '25', expected: 25},
      ])('given $input, returns $expected', ({ input, expected}) => {
        //Arrange
        const sut = new StringCalculator();
        //Act
        const actual = sut.add(input);
        //Assert
        expect(actual).toBe(expected);
      });      
    });
    describe('two numbers', () => {
      test.each([
        { input: '5,4', expected: 9 },
        { input: '25,1', expected: 26 },
      ])('given two numbers', ({ input, expected}) => {
        //Arrange
        const sut = new StringCalculator();
        //Act
        const actual = sut.add(input);
        //Assert
        expect(actual).toBe(expected);
      });      
    });
    describe('many numbers, comma delimiter', () => {
      test.each([
        { input: '5,4,1', expected: 10 },
        { input: '5,4,1,0,50', expected: 60 },
      ])('given many numbers', ({ input, expected }) => {
        // Arrange
        const sut = new StringCalculator();
        // Act
         const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });
    describe('new line as delimiter', () => {
      test('given 5\\n4,1 returns 10', () => {
        // Arrange
        const input = '5\n4,1';
        const expected = 10;
        const sut = new StringCalculator();
        // Act
         const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });
    describe('custom delimiter', () => {
      test('given //;\n5;4;1', () => {
        // Arrange
        const input = '//;\n5;4;1';
        const expected = 10;
        const sut = new StringCalculator();
        // Act
         const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });  
    describe('disallow negatives', () => {
      test('given negatives should return an exception', () => {
        // Arrange
        const input = '1,-2,-3';
        const sut = new StringCalculator();
        // Act / Assert
        expect(() => { sut.add(input) }).toThrow('error: negatives not allowed: -2,-3');
      });
    }); 
    describe('ignore numbers greater than 1000', () => {
      test.each([
        {input: '1001,2', expected: 2},
      ])('given $input should return $expected', ({ input, expected }) => {
        // Arrange
        const sut = new StringCalculator();
        // Act
        const actual = sut.add(input);
        // Assert
        expect(actual).toBe(expected);
      });
    });         
  })
})