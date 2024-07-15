export enum Outcome {
  PlayerWins = 'PlayerWins',
  PlayerLoses = 'PlayerLoses',
  Tie = 'Tie',
}

export enum Move {
  Paper = 'Paper', 
  Rock = 'Rock',
  Scissors = 'Scissors',
}

interface RockPaperScissors {
  play(playerMove:Move, opponentMove:Move):Outcome;
}

export const createRockPaperScissors = () => {
  const scenarios = new Array(
    { playerMove: Move.Paper, opponentMove: Move.Rock, outcome: Outcome.PlayerWins },
    { playerMove: Move.Scissors, opponentMove: Move.Paper, outcome: Outcome.PlayerWins },
    { playerMove: Move.Rock, opponentMove: Move.Scissors, outcome: Outcome.PlayerWins },
    { playerMove: Move.Paper, opponentMove: Move.Paper, outcome: Outcome.Tie},
    { playerMove: Move.Rock, opponentMove: Move.Rock, outcome: Outcome.Tie},
    { playerMove: Move.Scissors, opponentMove: Move.Scissors, outcome: Outcome.Tie},
    { playerMove: Move.Rock, opponentMove: Move.Paper, outcome: Outcome.PlayerLoses},
    { playerMove: Move.Paper, opponentMove: Move.Scissors, outcome: Outcome.PlayerLoses},
    { playerMove: Move.Scissors, opponentMove: Move.Rock, outcome: Outcome.PlayerLoses},
  );
  return {
    play(playerMove: Move, opponentMove: Move){
      const result = scenarios.find( 
        scenario => scenario.playerMove === playerMove && scenario.opponentMove === opponentMove
      );
      return result?.outcome;      
    }
  }
};