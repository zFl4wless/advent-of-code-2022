import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay08 extends AdventDay {
    private readonly treeGrid: number[][];
    private visibleTrees: number;
    private highestScenicScore: number;

    constructor() {
        super(8);

        this.treeGrid = [];
        this.visibleTrees = 0;
        this.highestScenicScore = 0;
        this.input.forEach((line) => {
            this.generateTreeGrid(line);
        });

        this.traverseTreeGrid();
    }

    part01(): void {
        console.log(this.visibleTrees);
    }

    part02(): void {
        console.log(this.highestScenicScore);
    }

    private generateTreeGrid(line: string): void {
        const treeGrid = line.split('').map((number) => parseInt(number, 10));
        this.treeGrid.push(treeGrid);
    }

    private traverseTreeGrid(): void {
        this.treeGrid.forEach((row, y) => {
            row.forEach((_tree, x) => {
                if (this.getVisibleTrees(x, y)) {
                    this.visibleTrees++;
                }
                
                const scenicScore = this.getScenicScore(x, y);
                if (scenicScore > this.highestScenicScore) {
                    this.highestScenicScore = scenicScore;
                }
            });
        });
    }

    private getVisibleTrees(x: number, y: number): boolean {
        const grid = this.treeGrid;
        const gridWidth = grid[0].length;
        const gridHeight = grid.length;

        const treeHeight = grid[y][x];
        if (treeHeight === undefined) {
            throw new Error('No tree at this point');
        }

        // Check if the point is on the edge of the grid
        if (x === 0 || x === gridWidth - 1 || y === 0 || y === gridHeight - 1) {
            return true;
        }

        // Traverse right
        let visibleRight = true;
        for (let i = x + 1; i < gridWidth; i++) {
            if (grid[y][i] >= treeHeight) {
                visibleRight = false;
                break;
            }
        }

        // Traverse left
        let visibleLeft = true;
        for (let i = x - 1; i >= 0; i--) {
            if (grid[y][i] >= treeHeight) {
                visibleLeft = false;
                break;
            }
        }

        // Traverse down
        let visibleDown = true;
        for (let i = y + 1; i < gridHeight; i++) {
            if (grid[i][x] >= treeHeight) {
                visibleDown = false;
                break;
            }
        }

        // Traverse up
        let visibleUp = true;
        for (let i = y - 1; i >= 0; i--) {
            if (grid[i][x] >= treeHeight) {
                visibleUp = false;
                break;
            }
        }

        return visibleRight || visibleLeft || visibleDown || visibleUp;
    }

    private getScenicScore(x: number, y: number): number {
        const grid = this.treeGrid;
        const gridWidth = grid[0].length;
        const gridHeight = grid.length;

        const treeHeight = grid[y][x];
        if (treeHeight === undefined) {
            throw new Error('No tree at this point');
        }

/*         // Check if the point is on the edge of the grid
        if (x === 0 || x === gridWidth - 1 || y === 0 || y === gridHeight - 1) {
            return true;
        } */

        // Traverse right
        let treeCountRight = 0;
        for (let i = x + 1; i < gridWidth; i++) {
            treeCountRight++;
            if (grid[y][i] >= treeHeight) {
                break;
            }
        }

        // Traverse left
        let treeCountLeft = 0;
        for (let i = x - 1; i >= 0; i--) {
            treeCountLeft++;
            if (grid[y][i] >= treeHeight) {
                break;
            }
        }

        // Traverse down
        let treeCountDown = 0;
        for (let i = y + 1; i < gridHeight; i++) {
            treeCountDown++;
            if (grid[i][x] >= treeHeight) {
                break;
            }
        }

        // Traverse up
        let treeCountUp = 0;
        for (let i = y - 1; i >= 0; i--) {
            treeCountUp++;
            if (grid[i][x] >= treeHeight) {
                break;
            }
        }

        return treeCountRight * treeCountLeft * treeCountDown * treeCountUp;
    }
}
