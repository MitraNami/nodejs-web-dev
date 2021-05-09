const fs = require('fs').promises;
const util = require('util');

fs.readdir('.')
  .then(files => console.log(files))
  .catch(err => console.error(err))

const readdir = util.callbackify(fs.readdir);
readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});