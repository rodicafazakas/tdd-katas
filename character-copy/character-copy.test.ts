// no characters + newline
// one character + newline
// two characters + newline
// many characters + newline
// repeated characters + newline
// the order of teh characters
// characters after the newline should not be written

import { Copier, Source, Destination } from './character-copy';

function createSource(chars: string[]) {
  const mockReadChar = jest.fn();
  mockReadChar.mockReturnValue('\n');
  chars.map(c => mockReadChar.mockReturnValueOnce(c));
  return {
    readChar: mockReadChar
  };
}; 

function createDestination() {
  const writtenChars: string[] = [];
  return {
    writeChar: jest.fn(c => writtenChars.push(c)),
    getWrittenChars: () => writtenChars,
  };
};

function createCopier(source: Source, destination: Destination) {
  return new Copier(source, destination);
};

describe('character-copy', () => {
  describe('copy', () => {
    describe('no character before newline', () => {
      test('no character', () => {
        // Arrange
        const source = createSource([]);
        const destination = createDestination(); 
        const sut = createCopier(source, destination);
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toHaveBeenCalledTimes(0);
      });
    })
    describe('one character with newline', () => {
      test.each([
        { char: 'a' },
        { char: 'b' },
        { char: '|' },
      ])('char: $char', ({ char }) => {
        // Arrange
        const source = createSource([char]);
        const destination = createDestination(); 
        const sut = createCopier(source, destination);
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toHaveBeenCalledTimes(1);
        expect(destination.getWrittenChars()).toContain(char);
      });
    })
    describe('multiple characters with newline', () => {
      test.each([
        { chars: ['a', 'b', 'c'] },
        { chars: ['3', 'x', '|', '#', '&'] },
        { chars: ['3', '3', 'b', 'b', '&'] },
      ])('chars: $chars', ({ chars }) => {
        // Arrange
        const source = createSource(chars);
        const destination = createDestination(); 
        const sut = createCopier(source, destination);
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toHaveBeenCalledTimes(chars.length);
        expect(destination.getWrittenChars()).toStrictEqual(chars);
      });
    })
    describe('characters after the newline are not written', () => {
      test.each([
        { chars: ['z', 't', '\n', 'd', 'h'] },
      ])('chars: $chars', ({ chars }) => {
        // Arrange
        const source = createSource(chars);
        const destination = createDestination();
        const sut = createCopier(source, destination);
        // Act
        sut.copy();
        // Assert
        expect(destination.getWrittenChars()).toEqual(['z', 't']); 
      });
    });
  });
});