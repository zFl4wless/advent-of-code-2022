import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay09 extends AdventDay {
    private gridRows = 1000;
    private gridCols = 1000;
    private grid: string[][] = [];
    private head: { x: number; y: number } = { x: 0, y: 0 };
    private knots: { x: number; y: number }[] = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ];
    private visitedPositionsFirstKnot: { x: number; y: number }[] = [];
    private visitedPositionsLastKnot: { x: number; y: number }[] = [];

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
        this.knots.forEach((knot, index) => {
            knot.x = this.gridCols / 2;
            knot.y = this.gridRows / 2;

            if (index === 0) {
                this.visitedPositionsFirstKnot.push({ x: knot.x, y: knot.y });
            }
            if (index === 8) {
                this.visitedPositionsLastKnot.push({ x: knot.x, y: knot.y });
            }
        });

        // Read the input.
        this.input.forEach((line) => {
            const [direction, length] = line.split(' ');

            // Move the head and the tail.
            this.moveHead(direction, parseInt(length));
            this.moveTail();
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
        }
    }

    private moveTail(): void {
        this.knots.forEach((knot, index) => {
            const toFollow = index + 1 === 1 ? this.head : this.knots[index - 1];

            if (Math.abs(toFollow.x - knot.x) <= 1 && Math.abs(toFollow.y - knot.y) <= 1) {
                if (this.grid[knot.y][knot.x] === '.') {
                    this.grid[knot.y][knot.x] = (index + 1).toString();
                }
                return;
            }

            if (this.grid[knot.y][knot.x] === (index + 1).toString()) {
                this.grid[knot.y][knot.x] = '.';
            }
            if (Math.abs(toFollow.x - knot.x) + Math.abs(toFollow.y - knot.y) > 2) {
                // Move diagonally
                const diffX = toFollow.x - knot.x;
                const diffY = toFollow.y - knot.y;

                if (diffX > 0 && diffY > 0) {
                    knot.x++;
                    knot.y++;
                } else if (diffX > 0 && diffY < 0) {
                    knot.x++;
                    knot.y--;
                } else if (diffX < 0 && diffY > 0) {
                    knot.x--;
                    knot.y++;
                } else if (diffX < 0 && diffY < 0) {
                    knot.x--;
                    knot.y--;
                } else {
                    console.log('Something went wrong.');
                }
            } else {
                // Move the tail.
                if (toFollow.x > knot.x) {
                    knot.x++;
                } else if (toFollow.x < knot.x) {
                    knot.x--;
                } else if (toFollow.y > knot.y) {
                    knot.y++;
                } else if (toFollow.y < knot.y) {
                    knot.y--;
                }
            }
            this.grid[knot.y][knot.x] = (index + 1).toString();

            if (index === 8) {
                if (this.visitedPositionsLastKnot.find((pos) => pos.x === knot.x && pos.y === knot.y)) {
                    return;
                }
                this.visitedPositionsLastKnot.push({ x: knot.x, y: knot.y });
            }

            if (index === 0) {
                if (this.visitedPositionsFirstKnot.find((pos) => pos.x === knot.x && pos.y === knot.y)) {
                    return;
                }
                this.visitedPositionsFirstKnot.push({ x: knot.x, y: knot.y });
            }
        });
    }

    part01(): void {
        console.log(this.visitedPositionsFirstKnot.length);
    }

    part02(): void {
        console.log(this.visitedPositionsLastKnot.length);
    }
}
