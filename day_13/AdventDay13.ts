import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay13 extends AdventDay {
    private pairs: [number | number[], number | number[]][] = [];
    private rightOrderIndices: number[] = [];

    constructor() {
        super(13);

        this.input = this.input.filter((line) => line.length > 0);
        for (let i = 0; i < this.input.length; i += 2) {
            const left = this.convertStringToArray(this.input[i])[0];
            const right = this.convertStringToArray(this.input[i + 1])[0];
            this.pairs.push([left, right]);
        }

        for (let i = 0; i < this.pairs.length; i++) {
            const left = this.pairs[i][0];
            const right = this.pairs[i][1];

            const inRightOrder = this.compare(left, right);
            if (inRightOrder === 1) {
                this.rightOrderIndices.push(i + 1);
            }
        }
    }

    part01(): void {
        const sum = this.rightOrderIndices.reduce((a, b) => a + b, 0);

        console.log(sum);
    }

    part02(): void {
        const packets: any[] = [];
        for (let i = 0; i < this.pairs.length; i++) {
            packets.push(this.pairs[i][0]);
            packets.push(this.pairs[i][1]);
        }
        packets.push([[2]])
        packets.push([[6]])

        let indexOf2 = 1;
        let indexOf6 = 2;
        for (let i = 0; i < packets.length; i++) {
            if (this.compare(packets[i], [[2]] as any) === 1) {
                indexOf2++;
                indexOf6++;
            } else if (this.compare(packets[i], [[6]] as any) === 1) {
                indexOf6++;
            }
        }

        console.log(indexOf2 * (indexOf6 - 1));
    }

    private compare(left: number | number[], right: number | number[]): number {
        if (Array.isArray(left) && typeof right === 'number') {
            right = [right];
        }

        if (typeof left === 'number' && Array.isArray(right)) {
            left = [left];
        }

        if (typeof left === 'number' && typeof right === 'number') {
            if (left < right) {
                return 1;
            }

            if (left === right) {
                return 0;
            }

            return -1;
        }

        if (Array.isArray(left) && Array.isArray(right)) {
            let i = 0;
            while (i < left.length && i < right.length) {
                const inRightOrder = this.compare(left[i], right[i]);

                if (inRightOrder === 1) {
                    return 1;
                }

                if (inRightOrder === -1) {
                    return -1;
                }

                i++;
            }

            if (i === left.length) {
                if (left.length === right.length) {
                    return 0;
                }
                return 1;
            }
        }

        return -1;
    }

    private convertStringToArray(input: string): any[] {
        let currentIndex = 0;

        const parseArray = (): any[] => {
            const result: any[] = [];

            while (currentIndex < input.length) {
                const currentChar = input[currentIndex];

                if (currentChar === '[') {
                    currentIndex++;
                    const nestedArray = parseArray();
                    result.push(nestedArray);
                } else if (/[0-9]/.test(currentChar)) {
                    let numStr = '';
                    while (/[0-9]/.test(input[currentIndex])) {
                        numStr += input[currentIndex];
                        currentIndex++;
                    }
                    const num = Number(numStr);
                    result.push(num);
                } else if (currentChar === ',' || currentChar === ']') {
                    currentIndex++;
                } else {
                    currentIndex++;
                }

                if (currentChar === ']') {
                    break;
                }
            }

            return result;
        };

        return parseArray();
    }
}
