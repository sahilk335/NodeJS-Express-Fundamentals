const { readFile, writeFile } = require('fs').promises;

//commenting below para because we are importing promisify above

/* const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */





//Commenting below paragraph because we are going to use "util module" "promisify" function defined by Node

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    })
}; */

//Commenting promises then/catch and replacing it with async awatit

/* getText('./content/first.txt')
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); */

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mess.txt',
            `This is my zone : ${first},${second}`,
            { flag: 'a' })
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }


}

start();