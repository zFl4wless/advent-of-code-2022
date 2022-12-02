import * as fs from "fs";

enum Points {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
  LOSS = 0,
  TIE = 3,
  WIN = 6,
}
const choices = {
  A: Points.ROCK,
  B: Points.PAPER,
  C: Points.SCISSORS,
  X: Points.ROCK,
  Y: Points.PAPER,
  Z: Points.SCISSORS,
};

let score = 0;
fs.readFileSync("./day_02/input.txt", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => {
    const [enemy, me] = line.split(" ");

    if (choices[enemy] === choices[me]) {
      score += Points.TIE;
    } else if (choices[enemy] == Points.ROCK && choices[me] == Points.PAPER) {
      score += Points.WIN;
    } else if (
      choices[enemy] == Points.PAPER &&
      choices[me] == Points.SCISSORS
    ) {
      score += Points.WIN;
    } else if (
      choices[enemy] == Points.SCISSORS &&
      choices[me] == Points.ROCK
    ) {
      score += Points.WIN;
    } else {
      score += Points.LOSS;
    }

    score += choices[me];
  });

// Part 1
console.log(score);
