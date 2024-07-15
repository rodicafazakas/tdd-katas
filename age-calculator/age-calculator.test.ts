import { createAgeCalculator } from './age-calculator';

describe('age-calculator', () => {
  describe('already had birthday this year ', () => {
    test.each([
      { birthDate: '1991/10/16', targetDate: '2022/11/20', expected: 31 },
      { birthDate: '2000/02/29', targetDate: '2022/03/01', expected: 22 },
      { birthDate: '2000/02/29', targetDate: '2008/02/29', expected: 8 },
    ])('given birthday on $birthDate and targetDate on $targetDate, the age should be $expected', ({
      birthDate, 
      targetDate, 
      expected
    }) => {
      // Arrange
      // Act
      const actual = createAgeCalculator(new Date(birthDate), new Date(targetDate));
      // Assert
      expect(actual).toBe(expected);
    });
  }); 
  describe('given birthday not having taken place in the year', () => {
    test.each([
      { birthDate: '1982/11/20', targetDate: '2023/05/01', expected: 40 },
      { birthDate: '1982/11/20', targetDate: '2012/08/25', expected: 29 },
      { birthDate: '1950/01/31', targetDate: '2000/01/01', expected: 49 },
      { birthDate: '2000/03/29', targetDate: '2008/02/29', expected: 7 },
    ])('given birthdate of $birthDate and targetDate of $targetDate, the age should be $expected', ({
      birthDate, 
      targetDate, 
      expected
    }) => {
        // Arrange
        // Act
        const actual = createAgeCalculator(new Date(birthDate), new Date(targetDate));
        // Assert 
        expect(actual).toBe(expected);
    });
  });
});