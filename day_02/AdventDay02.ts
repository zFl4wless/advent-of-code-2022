import { AdventDay } from "../core/AdventDay.ts";

export class AdventDay02 extends AdventDay {
  private assumedScore: number;
  private correctScore: number;

  constructor() {
    super(2);

    this.assumedScore = 0;
    this.correctScore = 0;
    this.input.forEach((line) => {
      const [firstChar, secondChar] = line.split(" ");

      this.calculateAssumedScore(firstChar, secondChar);
      this.calculateCorrectScore(firstChar, secondChar);
    });
  }

  part01(): void {
    console.log(this.assumedScore);
  }

  part02(): void {
    console.log(this.correctScore);
  }

  private calculateAssumedScore(enemyChoice: string, myChoice: string): void {
    if (choices[enemyChoice] === choices[myChoice]) {
      this.assumedScore += Points.TIE;
    } else if (
      choices[enemyChoice] == Points.ROCK &&
      choices[myChoice] == Points.PAPER
    ) {
      this.assumedScore += Points.WIN;
    } else if (
      choices[enemyChoice] == Points.PAPER &&
      choices[myChoice] == Points.SCISSORS
    ) {
      this.assumedScore += Points.WIN;
    } else if (
      choices[enemyChoice] == Points.SCISSORS &&
      choices[myChoice] == Points.ROCK
    ) {
      this.assumedScore += Points.WIN;
    } else {
      this.assumedScore += Points.LOSS;
    }

    this.assumedScore += choices[myChoice];
  }

  private calculateCorrectScore(
    enemyChoice: string,
    expectedResult: string
  ): void {
    if (choices[enemyChoice] === Points.ROCK && expectedResult === Result.WIN) {
      this.correctScore += Points.PAPER;
      this.correctScore += Points.WIN;
    } else if (
      choices[enemyChoice] === Points.PAPER &&
      expectedResult === Result.WIN
    ) {
      this.correctScore += Points.SCISSORS;
      this.correctScore += Points.WIN;
    } else if (
      choices[enemyChoice] === Points.SCISSORS &&
      expectedResult === Result.WIN
    ) {
      this.correctScore += Points.ROCK;
      this.correctScore += Points.WIN;
    } else if (
      choices[enemyChoice] === Points.ROCK &&
      expectedResult === Result.LOSS
    ) {
      this.correctScore += Points.SCISSORS;
      this.correctScore += Points.LOSS;
    } else if (
      choices[enemyChoice] === Points.PAPER &&
      expectedResult === Result.LOSS
    ) {
      this.correctScore += Points.ROCK;
      this.correctScore += Points.LOSS;
    } else if (
      choices[enemyChoice] === Points.SCISSORS &&
      expectedResult === Result.LOSS
    ) {
      this.correctScore += Points.PAPER;
      this.correctScore += Points.LOSS;
    } else {
      this.correctScore += choices[enemyChoice];
      this.correctScore += Points.TIE;
    }
  }
}

const Result = {
  WIN: "Z",
  TIE: "Y",
  LOSS: "X",
};
const Points = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  LOSS: 0,
  TIE: 3,
  WIN: 6,
};
const choices: {
  [key: string]: number;
} = {
  A: Points.ROCK,
  B: Points.PAPER,
  C: Points.SCISSORS,
  X: Points.ROCK,
  Y: Points.PAPER,
  Z: Points.SCISSORS,
};
