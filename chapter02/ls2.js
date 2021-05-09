const fs = require('fs').promises;

async function listFiles() {
  const path = process.argv[2] || '.';
  try {
    const files = await fs.readdir(path);
    for (const file of files) {
      console.log(file);
    }
  } catch(err) {
    console.error('Error:', err);
  }
}


listFiles();