const fs = require('fs');

const fs_readdir = dir => {
  // it's similar to what util.promisify does:
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
};


async function listFiles() {
  const dir = process.argv[2] || '.';
  try {
    const files = await fs_readdir(dir);
    for (const file of files) {
      console.log(file);
    }
  } catch(error) {
    console.error(error);
  }
}

listFiles();