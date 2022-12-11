import { Monkey } from "./monkey.ts";

export const monkeysPart1: Monkey[] = [
    {
        startingItems: [54, 89, 94],
        operation: (worryLevel: number) => worryLevel * 7,
        test: (worryLevel: number) => worryLevel % 17 === 0,
        throwToMonkeyIfTrue: 5,
        throwToMonkeyIfFalse: 3,
    },
    {
        startingItems: [66, 71],
        operation: (worryLevel: number) => worryLevel + 4,
        test: (worryLevel: number) => worryLevel % 3 === 0,
        throwToMonkeyIfTrue: 0,
        throwToMonkeyIfFalse: 3,
    },
    {
        startingItems: [76, 55, 80, 55, 55, 96, 78],
        operation: (worryLevel: number) => worryLevel + 2,
        test: (worryLevel: number) => worryLevel % 5 === 0,
        throwToMonkeyIfTrue: 7,
        throwToMonkeyIfFalse: 4,
    },
    {
        startingItems: [93, 69, 76, 66, 89, 54, 59, 94],
        operation: (worryLevel: number) => worryLevel + 7,
        test: (worryLevel: number) => worryLevel % 7 === 0,
        throwToMonkeyIfTrue: 5,
        throwToMonkeyIfFalse: 2,
    },
    {
        startingItems: [80, 54, 58, 75, 99],
        operation: (worryLevel: number) => worryLevel * 17,
        test: (worryLevel: number) => worryLevel % 11 === 0,
        throwToMonkeyIfTrue: 1,
        throwToMonkeyIfFalse: 6,
    },
    {
        startingItems: [69, 70, 85, 83],
        operation: (worryLevel: number) => worryLevel + 8,
        test: (worryLevel: number) => worryLevel % 19 === 0,
        throwToMonkeyIfTrue: 2,
        throwToMonkeyIfFalse: 7,
    },
    {
        startingItems: [89],
        operation: (worryLevel: number) => worryLevel + 6,
        test: (worryLevel: number) => worryLevel % 2 === 0,
        throwToMonkeyIfTrue: 0,
        throwToMonkeyIfFalse: 1,
    },
    {
        startingItems: [62, 80, 58, 57, 93, 56],
        operation: (worryLevel: number) => worryLevel * worryLevel,
        test: (worryLevel: number) => worryLevel % 13 === 0,
        throwToMonkeyIfTrue: 6,
        throwToMonkeyIfFalse: 4,
    },
];

export const monkeysPart2: Monkey[] = [
    {
        startingItems: [54, 89, 94],
        operation: (worryLevel: number) => worryLevel * 7,
        test: (worryLevel: number) => worryLevel % 17 === 0,
        throwToMonkeyIfTrue: 5,
        throwToMonkeyIfFalse: 3,
    },
    {
        startingItems: [66, 71],
        operation: (worryLevel: number) => worryLevel + 4,
        test: (worryLevel: number) => worryLevel % 3 === 0,
        throwToMonkeyIfTrue: 0,
        throwToMonkeyIfFalse: 3,
    },
    {
        startingItems: [76, 55, 80, 55, 55, 96, 78],
        operation: (worryLevel: number) => worryLevel + 2,
        test: (worryLevel: number) => worryLevel % 5 === 0,
        throwToMonkeyIfTrue: 7,
        throwToMonkeyIfFalse: 4,
    },
    {
        startingItems: [93, 69, 76, 66, 89, 54, 59, 94],
        operation: (worryLevel: number) => worryLevel + 7,
        test: (worryLevel: number) => worryLevel % 7 === 0,
        throwToMonkeyIfTrue: 5,
        throwToMonkeyIfFalse: 2,
    },
    {
        startingItems: [80, 54, 58, 75, 99],
        operation: (worryLevel: number) => worryLevel * 17,
        test: (worryLevel: number) => worryLevel % 11 === 0,
        throwToMonkeyIfTrue: 1,
        throwToMonkeyIfFalse: 6,
    },
    {
        startingItems: [69, 70, 85, 83],
        operation: (worryLevel: number) => worryLevel + 8,
        test: (worryLevel: number) => worryLevel % 19 === 0,
        throwToMonkeyIfTrue: 2,
        throwToMonkeyIfFalse: 7,
    },
    {
        startingItems: [89],
        operation: (worryLevel: number) => worryLevel + 6,
        test: (worryLevel: number) => worryLevel % 2 === 0,
        throwToMonkeyIfTrue: 0,
        throwToMonkeyIfFalse: 1,
    },
    {
        startingItems: [62, 80, 58, 57, 93, 56],
        operation: (worryLevel: number) => worryLevel * worryLevel,
        test: (worryLevel: number) => worryLevel % 13 === 0,
        throwToMonkeyIfTrue: 6,
        throwToMonkeyIfFalse: 4,
    },
];
