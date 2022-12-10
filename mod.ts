import { AdventDay } from './core/AdventDay.ts';
import { AdventDay01 } from './day_01/AdventDay01.ts';
import { AdventDay02 } from './day_02/AdventDay02.ts';
import { AdventDay03 } from './day_03/AdventDay03.ts';
import { AdventDay04 } from './day_04/AdventDay04.ts';
import { AdventDay05 } from './day_05/AdventDay05.ts';
import { AdventDay06 } from './day_06/AdventDay06.ts';
import { AdventDay07 } from './day_07/AdventDay07.ts';
import { AdventDay08 } from './day_08/AdventDay08.ts';
import { AdventDay09 } from './day_09/AdventDay09.ts';
import { AdventDay10 } from './day_10/AdventDay10.ts';

const answer = prompt('Select a day to view the solution output! [1-24] ');
if (answer && isNaN(parseInt(answer))) {
    console.log('Invalid day selected!');
    Deno.exit(1);
}

const day = parseInt(answer!);
if (day < 1 || day > 24) {
    console.log('The given day is not within the range of 1-24.');
    Deno.exit(1);
}

let adventDay: AdventDay;
switch (day) {
    case 1:
        adventDay = new AdventDay01();
        break;
    case 2:
        adventDay = new AdventDay02();
        break;
    case 3:
        adventDay = new AdventDay03();
        break;
    case 4:
        adventDay = new AdventDay04();
        break;
    case 5:
        adventDay = new AdventDay05();
        break;
    case 6:
        adventDay = new AdventDay06();
        break;
    case 7:
        adventDay = new AdventDay07();
        break;
    case 8:
        adventDay = new AdventDay08();
        break;
    case 9:
        adventDay = new AdventDay09();
        break;
    case 10:
        adventDay = new AdventDay10();
        break;
    default:
        console.log('Invalid day selected!');
}

if (adventDay!) {
    console.log('Part 1:');
    adventDay.part01();
    console.log('Part 2:');
    adventDay.part02();
}
