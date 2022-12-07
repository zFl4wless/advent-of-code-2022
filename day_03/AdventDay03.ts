import { AdventDay } from "../core/AdventDay.ts";

export class AdventDay03 extends AdventDay {
  private prioritySumItemTypesCompartments: number;
  private prioritySumItemTypesElfGroups: number;
  private badges: string[];
  private iterationCount: number;

  constructor() {
    super(3);

    this.prioritySumItemTypesCompartments = 0;
    this.prioritySumItemTypesElfGroups = 0;
    this.badges = [];
    this.iterationCount = 1;
    this.input.forEach((line) => {
        this.calculatePrioritySumItemTypesFromCompartments(line);
        this.calculatePrioritySumItemTypesFromElfGroups(line);

        this.iterationCount++;
    });
  }

  part01(): void {
    console.log(this.prioritySumItemTypesCompartments);
  }

  part02(): void {
    console.log(this.prioritySumItemTypesElfGroups);
  }

  private calculatePrioritySumItemTypesFromCompartments(line: string) {
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

    this.prioritySumItemTypesCompartments += priority;
  }

  private calculatePrioritySumItemTypesFromElfGroups(line: string) {
    this.badges.push(line);

    if (this.iterationCount % 3 === 0) {
      const [firstBadge, secondBadge, thirdBadge] = this.badges;

      const sharedCharacter = firstBadge
        .split("")
        .find(
          (char) => secondBadge.includes(char) && thirdBadge.includes(char)
        );
      if (!sharedCharacter) {
        return;
      }

      const priority =
        sharedCharacter === sharedCharacter.toLowerCase()
          ? alphabet.indexOf(sharedCharacter) + 1
          : alphabet.indexOf(sharedCharacter.toLowerCase()) + 27;

      this.prioritySumItemTypesElfGroups += priority;
      this.badges = [];
    }
  }
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
