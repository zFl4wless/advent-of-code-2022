import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay04 extends AdventDay {
    private fullyOverlappingRangesCount: number;
    private overlappingRangesCount: number;

    constructor() {
        super(4);

        this.fullyOverlappingRangesCount = 0;
        this.overlappingRangesCount = 0;
        this.input.forEach((line) => {
            this.calculateOverlappingRanges(line);
        });
    }

    part01(): void {
        console.log(this.fullyOverlappingRangesCount);
    }

    part02(): void {
        console.log(this.overlappingRangesCount);
    }

    private calculateOverlappingRanges(line: string): void {
        const [firstRange, secondRange] = line.split(',');
        const firstRangeArr = this.inputRangeToArr(firstRange);
        const secondRangeArr = this.inputRangeToArr(secondRange);

        if (
            firstRangeArr.every((num) => secondRangeArr.includes(num)) ||
            secondRangeArr.every((num) => firstRangeArr.includes(num))
        ) {
            this.fullyOverlappingRangesCount++;
        }

        if (firstRangeArr.some((num) => secondRangeArr.includes(num))) {
            this.overlappingRangesCount++;
        }
    }

    private inputRangeToArr(inputRange: string): number[] {
        const [start, end] = inputRange.split('-').map(Number);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
}
