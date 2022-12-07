import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay05 extends AdventDay {
    private rerangedCrateStacks: { [key: string]: string[] };
    private rerangedCrateStacksInOrder: { [key: string]: string[] };

    constructor() {
        super(5);

        this.rerangedCrateStacks = {
            '1': ['F', 'C', 'P', 'G', 'Q', 'R'],
            '2': ['W', 'T', 'C', 'P'],
            '3': ['B', 'H', 'P', 'M', 'C'],
            '4': ['L', 'T', 'Q', 'S', 'M', 'P', 'R'],
            '5': ['P', 'H', 'J', 'Z', 'V', 'G', 'N'],
            '6': ['D', 'P', 'J'],
            '7': ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'],
            '8': ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'],
            '9': ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W'],
        };
        this.rerangedCrateStacksInOrder = {
            '1': ['F', 'C', 'P', 'G', 'Q', 'R'],
            '2': ['W', 'T', 'C', 'P'],
            '3': ['B', 'H', 'P', 'M', 'C'],
            '4': ['L', 'T', 'Q', 'S', 'M', 'P', 'R'],
            '5': ['P', 'H', 'J', 'Z', 'V', 'G', 'N'],
            '6': ['D', 'P', 'J'],
            '7': ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'],
            '8': ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'],
            '9': ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W'],
        };
        this.input.forEach((line) => {
            this.rerangeCrates(line);
            this.rerangeCratesInOrder(line);
        });
    }

    part01(): void {
        console.log(
            Object.values(this.rerangedCrateStacks)
                .map((stack) => stack[stack.length - 1])
                .join(''),
        );
    }

    part02(): void {
        console.log(
            Object.values(this.rerangedCrateStacksInOrder)
                .map((stack) => stack[stack.length - 1])
                .join(''),
        );
    }

    private rerangeCrates(line: string) {
        const [crateNumber, fromStack, toStack] = line
            .replace('move ', '')
            .replace(' from', '')
            .replace(' to', '')
            .split(' ');

        for (let i = 0; i < +crateNumber; i++) {
            this.rerangedCrateStacks[toStack].push(this.rerangedCrateStacks[fromStack].pop()!);
        }
    }

    private rerangeCratesInOrder(line: string) {
        const [crateNumber, fromStack, toStack] = line
            .replace('move ', '')
            .replace(' from', '')
            .replace(' to', '')
            .split(' ');

        const cratesToMove = [];
        for (let i = 0; i < +crateNumber; i++) {
            cratesToMove.push(this.rerangedCrateStacksInOrder[fromStack].pop()!);
        }

        this.rerangedCrateStacksInOrder[toStack].push(...cratesToMove.reverse());
    }
}
