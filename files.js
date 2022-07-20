const fs = require('fs');
const util = require('util')

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
    try {
        const firstFile = await readFilePromise('./text/first.txt', 'utf8');
        const secondFile = await readFilePromise('./text/second.txt', 'utf8');
        await writeFilePromise('./text/third.txt',
        `the sum of first and second is ${firstFile} ${secondFile}`);
        console.log(firstFile,secondFile);
    } catch (error) {
        console.log(error)
    }
   
}
start()

/*getText('./text/first.txt')
    .then((data) => {console.log(data)})
    .catch((error) => {console.log(error)})
    
    
    
    const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error,data) => {
            if(error) {
                reject(error)
            } else {
               resolve(data)
            }
        })
    })
}
*/