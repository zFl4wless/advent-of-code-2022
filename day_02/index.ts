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
let score_2 = 0;
fs.readFileSync("./day_02/input.txt", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => {
    const [col1, col2] = line.split(" ");

    part_1(col1, col2);
    part_2(col1, col2);
  });

// Part 1
function part_1(enemy: string, me: string) {
  if (choices[enemy] === choices[me]) {
    score += Points.TIE;
  } else if (choices[enemy] == Points.ROCK && choices[me] == Points.PAPER) {
    score += Points.WIN;
  } else if (choices[enemy] == Points.PAPER && choices[me] == Points.SCISSORS) {
    score += Points.WIN;
  } else if (choices[enemy] == Points.SCISSORS && choices[me] == Points.ROCK) {
    score += Points.WIN;
  } else {
    score += Points.LOSS;
  }

  score += choices[me];
}
console.log(score);

// Part 2
function part_2(enemy: string, result: string) {
  if (choices[enemy] === Points.ROCK && result === "Z") {
    score_2 += Points.PAPER;
    score_2 += Points.WIN;
  } else if (choices[enemy] === Points.PAPER && result === "Z") {
    score_2 += Points.SCISSORS;
    score_2 += Points.WIN;
  } else if (choices[enemy] === Points.SCISSORS && result === "Z") {
    score_2 += Points.ROCK;
    score_2 += Points.WIN;
  } else if (choices[enemy] === Points.ROCK && result === "X") {
    score_2 += Points.SCISSORS;
    score_2 += Points.LOSS;
  } else if (choices[enemy] === Points.PAPER && result === "X") {
    score_2 += Points.ROCK;
    score_2 += Points.LOSS;
  } else if (choices[enemy] === Points.SCISSORS && result === "X") {
    score_2 += Points.PAPER;
    score_2 += Points.LOSS;
  } else {
    score_2 += choices[enemy];
    score_2 += Points.TIE;
  }
}
console.log(score_2);
