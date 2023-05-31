import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay14 extends AdventDay {
    private filled: Set<string> = new Set();
    private readonly maxY = -Infinity;

    constructor() {
        super(14);

        this.input
            .filter((line: string) => line !== '')
            .forEach((line: string) => {
                const path: number[][] = [];
                line.trim().split(' -> ').forEach((coordinates: string) => {
                    path.push(coordinates
                        .split(',')
                        .map((coordinate: string) => parseInt(coordinate)));
                });

                for (let i = 1; i < path.length; i++) {
                    const currentX = path[i][0];
                    const currentY = path[i][1];
                    const previousX = path[i - 1][0];
                    const previousY = path[i - 1][1];

                    if (currentY !== previousY && currentX === previousX) {
                        for (let j = Math.min(currentY, previousY); j <= Math.max(currentY, previousY); j++) {
                            this.filled.add(`${currentX},${j}`);
                        }
                    }

                    if (currentX !== previousX && currentY === previousY) {
                        for (let j = Math.min(currentX, previousX); j <= Math.max(currentX, previousX); j++) {
                            this.filled.add(`${j},${currentY}`);
                        }
                    }
                }
            });

        for (const coordinate of this.filled) {
            const y: number = parseInt(coordinate.split(',')[1]);
            if (y > this.maxY) {
                this.maxY = y;
            }
        }
    }

    part01(): void {
        let answer = 0;
        while (true) {
            const result = this.simulateSandFlowPart01();
            if (!result) {
                break;
            }

            answer += 1;
        }

        console.log(answer);
    }

    part02(): void {
        let answer = 0;
        while (true) {
            const coordinates = this.simulateSandFlowPart02();
            this.filled.add(`${coordinates[0]},${coordinates[1]}`);
            answer += 1;

            if (coordinates[0] === 500 && coordinates[1] === 0) {
                break;
            }
        }

        console.log(answer);
    }

    private simulateSandFlowPart01(): boolean {
        let x = 500;
        let y = 0;

        while (y <= this.maxY) {
            if (!this.filled.has(`${x},${y + 1}`)) {
                y += 1;
                continue;
            }

            if (!this.filled.has(`${x - 1},${y + 1}`)) {
                x -= 1;
                y += 1;
                continue;
            }

            if (!this.filled.has(`${x + 1},${y + 1}`)) {
                x += 1;
                y += 1;
                continue;
            }

            this.filled.add(`${x},${y}`);
            return true;
        }

        return false;
    }

    private simulateSandFlowPart02(): [number, number] {
        let x = 500;
        let y = 0;

        if (this.filled.has(`${x},${y}`)) {
            return [x, y];
        }

        while (y <= this.maxY) {
            if (!this.filled.has(`${x},${y + 1}`)) {
                y += 1;
                continue;
            }

            if (!this.filled.has(`${x - 1},${y + 1}`)) {
                x -= 1;
                y += 1;
                continue;
            }

            if (!this.filled.has(`${x + 1},${y + 1}`)) {
                x += 1;
                y += 1;
                continue;
            }

            break;
        }

        return [x, y]
    }
}
