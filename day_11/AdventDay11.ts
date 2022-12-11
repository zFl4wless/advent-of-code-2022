import { AdventDay } from '../core/AdventDay.ts';
import { Monkey } from './monkey.ts';
import { monkeysPart1, monkeysPart2 } from './monkeys.ts';

export class AdventDay11 extends AdventDay {
    private monkeysPart1: Monkey[];
    private monkeysPart2: Monkey[];
    private inspectionCountPart1: Map<number, number>;
    private inspectionCountPart2: Map<number, number>;

    constructor() {
        super(11);

        this.monkeysPart1 = monkeysPart1;
        this.monkeysPart2 = monkeysPart2;
        this.inspectionCountPart1 = new Map<number, number>();
        this.inspectionCountPart2 = new Map<number, number>();
        for (let i = 0; i < 20; i++) {
            this.monkeysPart1.forEach((monkey) => {
                this.runRoundPart1(monkey);
            });
        }

        for (let i = 0; i < 10000; i++) {
            this.monkeysPart2.forEach((monkey) => {
                this.runRoundPart2(monkey);
            });
        }
    }

    private runRoundPart1(monkey: Monkey) {
        for (const worryLevel of monkey.startingItems) {
            this.increaseInspectionCount(monkey, this.monkeysPart1, this.inspectionCountPart1);
            let result = monkey.operation(worryLevel);
            result = Math.floor(result / 3);
            const throwTo = monkey.test(result) ? monkey.throwToMonkeyIfTrue : monkey.throwToMonkeyIfFalse;
            monkey.startingItems = monkey.startingItems.filter((item) => item !== worryLevel);
            monkeysPart1[throwTo].startingItems.push(result);
        }
    }

    private runRoundPart2(monkey: Monkey) {
        for (const worryLevel of monkey.startingItems) {
            this.increaseInspectionCount(monkey, this.monkeysPart2, this.inspectionCountPart2);
            let result = monkey.operation(worryLevel);
            result = result % 9699690;
            const throwTo = monkey.test(result) ? monkey.throwToMonkeyIfTrue : monkey.throwToMonkeyIfFalse;
            monkey.startingItems = monkey.startingItems.filter((item) => item !== worryLevel);
            monkeysPart2[throwTo].startingItems.push(result);
        }
    }

    private increaseInspectionCount(monkey: Monkey, monkeys: Monkey[], inspectionCount: Map<number, number>) {
        if (inspectionCount.has(monkeys.indexOf(monkey))) {
            inspectionCount.set(monkeys.indexOf(monkey), inspectionCount.get(monkeys.indexOf(monkey))! + 1);
        } else {
            inspectionCount.set(monkeys.indexOf(monkey), 1);
        }
    }

    private getMonkeyBusiness(inspectionCount: Map<number, number>): number {
        const sorted = [...inspectionCount.entries()].sort((a, b) => b[1] - a[1]);
        return sorted[0][1] * sorted[1][1];
    }

    part01(): void {
        console.log(this.getMonkeyBusiness(this.inspectionCountPart1));
    }

    part02(): void {
        console.log(this.getMonkeyBusiness(this.inspectionCountPart2));
    }
}
