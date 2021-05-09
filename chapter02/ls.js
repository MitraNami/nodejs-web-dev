// 1.using callbacks:

const fs = require('fs');

function listFiles() {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    for (const file of files) {
      console.log(file);
    }
  });
}

/*
you can use util.promisify from the util module, which generates a wrapper
function for old-style callback-oriented functions so it instead returns
a promise. For example:
const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);
readdir('.') // returns a promise now
  .then(console.log)
*/

// 2. using promises:

// const fs = require('fs').promises;

// function listFiles() {
//   fs.readdir('.')
//     .then(files => {
//       for (const file of files) {
//         console.log(file);
//       }
//     })
//     .catch(err => console.error('Error', err));
// }


// 3. using async await for handling the promise

// const fs = require('fs').promises;

// async function listFiles() {
//   try {
//     const files = await fs.readdir('.');
//     for (const file of files) {
//       console.log(file);
//     }
//   } catch(err) {
//     console.error('Error:', err);
//   }
// }



listFiles();

