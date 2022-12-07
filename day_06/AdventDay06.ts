import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay06 extends AdventDay {
    constructor() {
        super(6);
    }

    part01(): void {
        const dataStreamBuffer = this.input[0].split('');
        for (let i = 0; i < dataStreamBuffer.length; i++) {
            const groups = dataStreamBuffer.slice(i, i + 4);
            if (!this.containsDuplicates(groups)) {
                console.log(i + 4);
                break;
            }
        }
    }

    part02(): void {
        const dataStreamBuffer = this.input[0].split('');
        for (let i = 0; i < dataStreamBuffer.length; i++) {
            const groups = dataStreamBuffer.slice(i, i + 14);
            if (!this.containsDuplicates(groups)) {
                console.log(i + 14);
                break;
            }
        }
    }

    private containsDuplicates(array: string[]) {
        if (array.length !== new Set(array).size) {
            return true;
        }

        return false;
    }
}
