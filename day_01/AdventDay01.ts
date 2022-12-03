import { AdventDay } from "../core/AdventDay.ts";

export class AdventDay01 extends AdventDay {
  private caloriesList: number[];

  constructor() {
    super(1);

    this.caloriesList = [];
    this.calculateTotalCalories();
  }

  part01(): void {
    console.log(this.getHighestCalories(1)[0]);
  }

  part02(): void {
    console.log(this.getHighestCalories(3).reduce((a, b) => a + b));
  }

  private calculateTotalCalories(): void {
    let currentCalories = 0;
    this.input.forEach((line) => {
      if (line == "") {
        this.caloriesList.push(currentCalories);
        currentCalories = 0;
      } else {
        currentCalories += parseInt(line);
      }
    });
  }

  private getHighestCalories = (elves: number) =>
    this.caloriesList.sort((a, b) => b - a).slice(0, elves);
}
