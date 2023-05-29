export class Queue<T> {
    private queue: T[];

    constructor() {
        this.queue = [];
    }

    append(item: T) {
        this.queue.push(item);
    }

    popLeft(): T | undefined {
        return this.queue.shift();
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }
}