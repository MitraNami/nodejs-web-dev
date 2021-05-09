const fs = require('fs').promises;

(async () => {
  const path = process.argv[2] || '.';
  const files = await fs.readdir(path);
  files.forEach(file => console.log(file));
})()
  .catch(err => console.error(err))