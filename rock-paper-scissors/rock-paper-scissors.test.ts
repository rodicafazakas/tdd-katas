import { createRockPaperScissors, Move, Outcome } from './rock-paper-scissors';

describe('rock-paper-scissors', () => {
  describe('play', () => {
    describe('Rule 0: when both players move the same thing, it is a tie', () => {
      test('when player moves paper and oponent moves paper, it is a tie', () => {
        // Arrange
        const playerMove = Move.Paper;
        const opponentMove = Move.Paper;
        const expected = Outcome.Tie;
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      })
      test('when player moves scissors and oponent moves scissors, it is a tie', () => {
        // Arrange
        const playerMove = Move.Scissors;
        const opponentMove = Move.Scissors;
        const expected = Outcome.Tie; 
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);

      })
      test('when player moves rock and oponent moves rock, it is a tie', () => {
        // Arrange
        const playerMove = Move.Rock;
        const opponentMove = Move.Rock;
        const expected = Outcome.Tie;
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert 
        expect(actual).toBe(expected);
      })
    })
    describe('Rule 1: paper beats rock', () => {
      test.each([
        { playerMove: Move.Paper, opponentMove: Move.Rock, expected: Outcome.PlayerWins },
        { playerMove: Move.Rock, opponentMove: Move.Paper, expected: Outcome.PlayerLoses},
      ])('Player move: $playerMove, Opponent move: $opponentMove, Expected outcome: $expected', ({playerMove, opponentMove, expected}) => {
          // Arrange
          const sut = createRockPaperScissors();
          // Act
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
      });
    })
    describe('Rule 2: scissors beat paper', () => {
      test('given player moves paper and oponent moves scissors should return player loses', () => {
        // Arrange
        const playerMove = Move.Paper;
        const opponentMove = Move.Scissors;
        const expected = Outcome.PlayerLoses;
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      })
      test('given player moves scissors and oponent moves paper should return player wins', () => {
        // Arrange
        const playerMove = Move.Scissors;
        const opponentMove = Move.Paper;
        const expected = Outcome.PlayerWins;
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      })
    })
    describe('Rule 3: rock beats scissors', () => {
      test('when player moves rock and oponent moves scissors, player wins', () => {
        // Arrange
        const playerMove = Move.Rock;
        const opponentMove = Move.Scissors;
        const expected = Outcome.PlayerWins;
        const sut = createRockPaperScissors();

        // Act
        const actual = sut.play(playerMove, opponentMove);

        // Assert
        expect(actual).toBe(expected);
      })
      test('when player moves scissors and oponent moves rock, player loses', () => {
        // Arrange
        const playerMove = Move.Scissors;
        const opponentMove = Move.Rock;
        const expected = Outcome.PlayerLoses;
        const sut = createRockPaperScissors();
        // Act
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      })
    })
  })
})