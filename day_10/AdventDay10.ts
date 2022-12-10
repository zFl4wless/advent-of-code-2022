import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay10 extends AdventDay {
    private register: number;
    private currentCycle: number;
    private signalStrengthSum: number;
    private sprite: string[][];

    constructor() {
        super(10);

        this.register = 1;
        this.currentCycle = 0;
        this.signalStrengthSum = 0;
        this.sprite = [[], [], [], [], [], []];
        this.input.forEach((line) => {
            this.parseInput(line);
        });
    }

    part01(): void {
        console.log(this.signalStrengthSum);
    }

    part02(): void {
        this.sprite.forEach((row) => {
            console.log(row.join(''));
        });
    }

    private parseInput(line: string): void {
        this.drawSprite();
        this.currentCycle++;
        this.increaseSignalStrengthSum();

        if (line.startsWith('addx')) {
            const [_cmd, value] = line.split(' ');

            this.drawSprite();
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

    private currentSpriteRow = 0;
    private drawSprite(): void {
        const spriteCol = this.currentCycle % 40;

        if (this.register === spriteCol || this.register + 1 === spriteCol || this.register - 1 === spriteCol) {
            this.sprite[this.currentSpriteRow].push('#');
        } else {
            this.sprite[this.currentSpriteRow].push('.');
        }

        if ((this.currentCycle + 1) % 40 === 0) {
            this.currentSpriteRow++;
        }
    }
}
