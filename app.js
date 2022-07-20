import { createServer } from 'http';
const server = createServer((req,res) => {
    res.write('hello from my first server');
    res.end();
});

server.listen(5000);









/**
 * GLOBALS
 * __dirname path to the current directory
 * __filename
 * require  fuction to use module
 * module   info about current module
 * process  info about the enviroment where the programis being excuted env
 */

