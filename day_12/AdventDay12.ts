import { AdventDay } from '../core/AdventDay.ts';
import { Queue } from './Queue.ts';

export class AdventDay12 extends AdventDay {
    private grid: string[][] = [];
    private readonly startingRow?: number;
    private readonly startingCol?: number;
    private readonly endRow?: number;
    private readonly endCol?: number;

    constructor() {
        super(12);

        this.input.forEach((line) => {
            this.grid.push(line.split(''));
        });

        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            for (let j = 0; j < row.length; j++) {
                const col = row[j];

                if (col === 'S') {
                    this.startingRow = i;
                    this.startingCol = j;
                    this.grid[i][j] = 'a';
                }
                if (col === 'E') {
                    this.endRow = i;
                    this.endCol = j;
                    this.grid[i][j] = 'z';
                }
            }
        }
    }

    part01(): void {
        const queue = new Queue<number[]>();
        queue.append([0, this.startingRow!, this.startingCol!]);

        const visited = new Set<string>();
        visited.add(`${this.startingRow},${this.startingCol}`);

        while (!queue.isEmpty()) {
            const [distance, row, col] = queue.popLeft()!;
            for (const [nextRow, nextCol] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
                if (nextRow < 0 || nextCol < 0 || nextRow >= this.grid.length || nextCol >= this.grid[0].length) {
                    continue;
                }

                if (visited.has(`${nextRow},${nextCol}`)) {
                    continue;
                }

                if (this.ord(this.grid[nextRow][nextCol]) - this.ord(this.grid[row][col]) > 1) {
                    continue;
                }

                if (nextRow == this.endRow && nextCol == this.endCol) {
                    console.log(distance + 1);
                    return;
                }

                visited.add(`${nextRow},${nextCol}`);
                queue.append([distance + 1, nextRow, nextCol]);
            }
        }
    }

    part02(): void {
        const queue = new Queue<number[]>();
        queue.append([0, this.endRow!, this.endCol!]);

        const visited = new Set<string>();
        visited.add(`${this.endRow},${this.endCol}`);

        while (!queue.isEmpty()) {
            const [distance, row, col] = queue.popLeft()!;
            for (const [nextRow, nextCol] of [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]]) {
                if (nextRow < 0 || nextCol < 0 || nextRow >= this.grid.length || nextCol >= this.grid[0].length) {
                    continue;
                }

                if (visited.has(`${nextRow},${nextCol}`)) {
                    continue;
                }

                if (this.ord(this.grid[nextRow][nextCol]) - this.ord(this.grid[row][col]) < -1) {
                    continue;
                }

                if (this.grid[nextRow][nextCol] === 'a') {
                    console.log(distance + 1);
                    return;
                }

                visited.add(`${nextRow},${nextCol}`);
                queue.append([distance + 1, nextRow, nextCol]);
            }
        }
    }

    private ord(character: string): number {
        return character.charCodeAt(0);
    }
}
