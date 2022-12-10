import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay10 extends AdventDay {
    private register: number;
    private currentCycle: number;
    private signalStrengthSum: number;

    constructor() {
        super(10);

        this.register = 1;
        this.currentCycle = 0;
        this.signalStrengthSum = 0;
        this.input.forEach((line) => {
            this.parseInput(line);
        });
    }

    part01(): void {
        console.log(this.signalStrengthSum);
    }

    part02(): void {}

    private parseInput(line: string): void {
        this.currentCycle++;
        this.increaseSignalStrengthSum();

        if (line.startsWith('addx')) {
            const [_cmd, value] = line.split(' ');

            this.currentCycle++;
            this.increaseSignalStrengthSum();
            this.register += parseInt(value);
        }
    }

    private increaseSignalStrengthSum(): void {
        if (this.currentCycle === 20 || (this.currentCycle + 20) % 40 === 0) {
            this.signalStrengthSum += this.currentCycle * this.register;
        }
    }
}
