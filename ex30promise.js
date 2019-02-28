const fs = require('fs').promises;

const read_file = (fname) =>
    fs.open(fname, 'r')
        .then(fh => fh.stat().then(stat => [fh, stat]))
        .then(res =>
            res[0].read(Buffer.alloc(res[1].size), 0, res[1].size, null))
        .then(result =>
            console.log(`Read ${result.bytesRead} bytes: ${result.buffer.toString()}`))
        .catch(err => console.log(`Error ${err}`))

read_file('test.txt');
