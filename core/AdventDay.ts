import { IAdventDay } from "./IAdventDay.ts";

export class AdventDay implements IAdventDay {
  input: string[];

  constructor(day: number) {
    this.input = Deno.readTextFileSync(
      `./day_${day.toString().padStart(2, "0")}/input.txt`
    ).split(/\r?\n/);
  }

  part01(): void {
    throw new Error("Method not implemented.");
  }
  part02(): void {
    throw new Error("Method not implemented.");
  }
}
