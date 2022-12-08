import { AdventDay } from '../core/AdventDay.ts';

export class AdventDay07 extends AdventDay {
    private fileSystem: any = {
        '/': {},
    };
    private currentDirectory: string;
    private sizes: number[];
    private maxSizes: number[];
    private totalSpace: number;

    constructor() {
        super(7);

        this.fileSystem = <JSON>this.fileSystem;
        this.currentDirectory = '/';
        this.sizes = [];
        this.maxSizes = [];
        this.totalSpace = 0;
        this.input.forEach((line) => {
            this.parseCommand(line);
        });

        this.calculateMaxSizes(this.fileSystem, 100000);
        this.calculateAllSizes(this.fileSystem);
    }

    part01(): void {
        console.log(this.maxSizes.reduce((a, b) => a + b));
    }

    part02(): void {
        const potentialFolders = this.sizes.filter((size) => 70000000 - this.totalSpace + size > 30000000);
        console.log(potentialFolders.sort((a, b) => a - b)[0]);
    }

    private calculateSize(obj: any): number {
        let size = 0;
        for (const key in obj) {
            if (typeof obj[key] === 'number') {
                size += obj[key];
            } else {
                size += this.calculateSize(obj[key]);
            }
        }
        return size;
    }

    private calculateMaxSizes(obj: any, maxSize: number): void {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const folderSize = this.calculateSize(obj[key]);
                if (obj[key] === this.fileSystem['/']) {
                    this.totalSpace = folderSize;
                }

                if (folderSize < maxSize) {
                    this.maxSizes.push(folderSize);
                }
                this.calculateMaxSizes(obj[key], maxSize);
            }
        }
    }

    private calculateAllSizes(obj: any): void {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const folderSize = this.calculateSize(obj[key]);
                if (obj[key] === this.fileSystem['/']) {
                    this.totalSpace = folderSize;
                }

                this.sizes.push(folderSize);
                this.calculateAllSizes(obj[key]);
            }
        }
    }

    private parseCommand(line: string): void {
        if (line.startsWith('$')) {
            const [cmd, path] = line.replace('$ ', '').split(' ');
            switch (cmd) {
                case 'cd':
                    if (path === '/') {
                        this.currentDirectory = '/';
                    } else if (path === '..') {
                        const pathArray = this.currentDirectory.split('.');
                        pathArray.pop();
                        this.currentDirectory = pathArray.join('.');
                    } else {
                        this.currentDirectory = `${this.currentDirectory}.${path}`;
                    }
                    break;
                case 'ls':
                    break;
                default:
                    break;
            }
        } else {
            if (line.startsWith('dir')) {
                const folderName = line.replace('dir', '').trim();
                this.createFolder(folderName);
            } else {
                const [fileSize, fileName] = line.split(' ');
                this.createFile(fileName, parseInt(fileSize));
            }
        }
    }

    private createFolder(folderName: string): void {
        this.getJSONPath(this.fileSystem, this.currentDirectory)[folderName] = {};
    }

    private createFile(fileName: string, fileSize: number): void {
        this.getJSONPath(this.fileSystem, this.currentDirectory)[fileName] = fileSize;
    }

    private getJSONPath(obj: any, path: string): any {
        return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
    }
}
