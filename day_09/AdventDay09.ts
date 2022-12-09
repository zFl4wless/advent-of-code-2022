import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay09 extends AdventDay {
    private gridRows = 1000;
    private gridCols = 1000;
    private grid: string[][] = [];
    private head: { x: number; y: number } = { x: 0, y: 0 };
    private tail: { x: number; y: number } = { x: 0, y: 0 };
    private visitedPosition: { x: number; y: number }[] = [];

    constructor() {
        super(9);

        // Initialize the grid with dots.
        for (let i = 0; i < this.gridCols; i++) {
            this.grid.push([]);
            for (let j = 0; j < this.gridRows; j++) {
                this.grid[i].push('.');
            }
        }

        // Set the head and tail.
        this.head = { x: this.gridCols / 2, y: this.gridRows / 2 };
        this.tail = { x: this.gridCols / 2, y: this.gridRows / 2 };
        this.visitedPosition.push({ x: this.tail.x, y: this.tail.y });

        // Read the input.
        this.input.forEach((line) => {
            const [direction, length] = line.split(' ');

            // Move the head and the tail.
            this.moveHead(direction, parseInt(length));
            this.moveTail();

            /* DEBUG */
            /* this.printGrid(); */
        });
    }

    private moveHead(direction: string, length: number): void {
        for (let i = 0; i < length; i++) {
            if (this.grid[this.head.y][this.head.x] === 'H') {
                this.grid[this.head.y][this.head.x] = '.';
            }
            switch (direction) {
                case 'R':
                    this.head.x++;
                    break;
                case 'L':
                    this.head.x--;
                    break;
                case 'U':
                    this.head.y--;
                    break;
                case 'D':
                    this.head.y++;
                    break;
            }
            this.grid[this.head.y][this.head.x] = 'H';
            this.moveTail();

            /* DEBUG */
            /* this.grid.forEach((row) => {
                console.log(row.join(''));
            });
            console.log('\n'); */
        }
    }

    private moveTail(): void {
        if (Math.abs(this.head.x - this.tail.x) <= 1 && Math.abs(this.head.y - this.tail.y) <= 1) {
            if (this.grid[this.tail.y][this.tail.x] === '.') {
                this.grid[this.tail.y][this.tail.x] = 'T';
            }
            return;
        }

        if (this.grid[this.tail.y][this.tail.x] === 'T') {
            this.grid[this.tail.y][this.tail.x] = '.';
        }
        if (Math.abs(this.head.x - this.tail.x) + Math.abs(this.head.y - this.tail.y) > 2) {
            // Move diagonally
            const diffX = this.head.x - this.tail.x;
            const diffY = this.head.y - this.tail.y;

            if (diffX > 0 && diffY > 0) {
                this.tail.x++;
                this.tail.y++;
            } else if (diffX > 0 && diffY < 0) {
                this.tail.x++;
                this.tail.y--;
            } else if (diffX < 0 && diffY > 0) {
                this.tail.x--;
                this.tail.y++;
            } else if (diffX < 0 && diffY < 0) {
                this.tail.x--;
                this.tail.y--;
            } else {
                console.log('Something went wrong.');
            }
        } else {
            // Move the tail.
            if (this.head.x > this.tail.x) {
                this.tail.x++;
            } else if (this.head.x < this.tail.x) {
                this.tail.x--;
            } else if (this.head.y > this.tail.y) {
                this.tail.y++;
            } else if (this.head.y < this.tail.y) {
                this.tail.y--;
            }
        }
        this.grid[this.tail.y][this.tail.x] = 'T';

        if (this.visitedPosition.find((pos) => pos.x === this.tail.x && pos.y === this.tail.y)) {
            return;
        }
        this.visitedPosition.push({ x: this.tail.x, y: this.tail.y });
    }

    /* DEBUG */
    private count = 1;
    private printGrid() {
        console.log('############################################');
        console.log('Step', this.count);
        console.log('############################################');
        this.count++;
    }

    part01(): void {
        console.log(this.visitedPosition.length);
    }

    part02(): void {}
}
