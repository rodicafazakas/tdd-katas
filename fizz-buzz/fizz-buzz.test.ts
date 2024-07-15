import { createFizzBuzz } from "./fizz-buzz";

describe('fizz-buzz', () => {
  describe('fizz', () => {
    test.each([
      { input: 6 },
      { input: 9 },
      { input: 12 }, 
    ])('$input', ({ input }) => {
      // Arrange
      const expected = 'Fizz';
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected);
    });
  });
  describe('buzz', () => {
    test.each([
      { input: 10 },
      { input: 20 },
      { input: 25 },
    ])('$input', ({ input }) => {
      // Arrange
      const expected = 'Buzz';
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected); 
    });
  });
  describe('fizz-buzz', () => {
    test.each([
      { input: 15 },
      { input: 30 },
      { input: 45 },
    ])('$input', ({ input }) => {
      // Arrange
      const expected = 'Fizz-Buzz';
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected); 
    });
  });
  describe('given a number that is not divizible by neither 3 nor 5', () => {
    test.each([
      { input: 4, expected: "4" },
      { input: 14, expected: "14" },
      { input: 8, expected: "8" },
      { input: 22, expected: "22" },
      { input: 169, expected: "169" },
    ])('$input', ({ input, expected }) => {
      // Arrange
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected);
    })
  })
  describe('fizz-whiz', () => {
    test.each([
      { input : 3, expected: 'Fizz-Whiz' },
    ])('$input', ({ input, expected }) => {
      // Arrange
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected); 
    });
  });
  describe('buzz-whiz', () => {
    test.each([
      { input: 5, expected: 'Buzz-Whiz' },
    ])('$input', ({ input, expected }) => {
      // Arrange
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected);
    });
  });
  describe('whiz', () => {
    test.each([
      { input: 2, expected: 'Whiz'},
      { input: 7, expected: 'Whiz'},
      { input: 13, expected: 'Whiz'},
    ])('$input', ({ input, expected }) => {
      // Arrange
      const sut = createFizzBuzz();
      // Act
      const actual = sut.go(input);
      // Assert
      expect(actual).toBe(expected);
    });
  });
} );