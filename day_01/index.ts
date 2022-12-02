import * as fs from "fs";

let caloriesList = [];
let currentCalories = 0;
fs.readFileSync("./day_01/input.txt", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => {
    if (line == "") {
      caloriesList.push(currentCalories);
      currentCalories = 0;
    } else {
      currentCalories += parseInt(line);
    }
  });

/**
 * Gets the top x numbers from the calories list.
 *
 * @param elves The x number of elves to get the top numbers from.
 * @returns The top x numbers from the calories list.
 */
const getHighestCalories = (elves: number) =>
  caloriesList.sort((a, b) => b - a).slice(0, elves);

// Part 1 //
console.log(getHighestCalories(1)[0]);

// Part 2 //
console.log(getHighestCalories(3).reduce((a, b) => a + b));
