import { AdventDay } from "../core/AdventDay.ts";

export class AdventDay03 extends AdventDay {
  private prioritySumItemTypes: number;

  constructor() {
    super(3);

    this.prioritySumItemTypes = 0;
    this.input.forEach((line) => {
      this.calculatePrioritySumItemTypes(line);
    });
  }

  part01(): void {
    console.log(this.prioritySumItemTypes);
  }

  part02(): void {}

  private calculatePrioritySumItemTypes(line: string) {
    const [firstCompartment, secondCompartment] = [
      line.substring(0, line.length / 2),
      line.substring(line.length / 2),
    ];

    const sharedCharacter = firstCompartment
      .split("")
      .find((char) => secondCompartment.includes(char));
    if (!sharedCharacter) {
      return;
    }

    const priority =
      sharedCharacter === sharedCharacter.toLowerCase()
        ? alphabet.indexOf(sharedCharacter) + 1
        : alphabet.indexOf(sharedCharacter.toLowerCase()) + 27;

    this.prioritySumItemTypes += priority;
  }
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
