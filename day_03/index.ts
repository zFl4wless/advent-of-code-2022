import * as fs from "fs";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let prioritySumItemTypes = 0;
fs.readFileSync("./day_03/input.txt", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => {
    calculatePriortySumItemTypes(line);
  });

// Part 1
function calculatePriortySumItemTypes(line: string) {
  const [firstCompartment, secondCompartment] = [
    line.substring(0, line.length / 2),
    line.substring(line.length / 2),
  ];

  const sharedCharacter = firstCompartment
    .split("")
    .find((char) => secondCompartment.includes(char));
  const priority =
    sharedCharacter === sharedCharacter.toLowerCase()
      ? alphabet.indexOf(sharedCharacter) + 1
      : alphabet.indexOf(sharedCharacter.toLowerCase()) + 27;
  prioritySumItemTypes += priority;
}
console.log(prioritySumItemTypes);
