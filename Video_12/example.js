import * as os from 'os';
import * as path from 'path';
import * as process from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { promises as fs } from 'fs';

async function readFileAsync(filePath){
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    }
    catch(error){
        console.error('Error reading file:', error);
        }
}

readFileAsync('hello.txt');

const filename = fileURLToPath(import.meta.url);
const dirnamePath = dirname(filename);

console.log(dirnamePath);
console.log(filename);
console.log(os.platform());
console.log(os.cpus());
console.log(os.arch());
console.log(os.networkInterfaces());
console.log(process.arch);
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(path.extname(filename));
console.log(path.resolve(filename));
