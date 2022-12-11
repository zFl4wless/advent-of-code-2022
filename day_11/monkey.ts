export type Monkey = {
    startingItems: number[];
    operation: (worryLevel: number) => number;
    test: (worryLevel: number) => boolean;
    throwToMonkeyIfTrue: number;
    throwToMonkeyIfFalse: number;
};
