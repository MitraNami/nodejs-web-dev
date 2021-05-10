a = 12;

const promise = new Promise((resolve, reject) => {
  if (a > 5) {
    return resolve(`${a} is greater than 5`);
  }
  reject('Not greater than 5');
});

// First approach:
// promise
//   .then(msg => {
//     console.log(msg);
//     // throw new Error('just messing up');
//     // return Promise.reject('just messing up');
//   })
//   .catch(err => console.error('Error!!', err));



// Second approach:
// const executePromise = async (p) => {
//   try {
//     const msg = await p;
//     console.log(msg);
//     // throw new Error('just messing up');
//   } catch(err) {
//     console.error('Error!!', err);
//   }
// };

// executePromise(promise);


// Third approach:
const executePromise = async (p) => {
  const msg = await p;
  console.log(msg);
  // return Promise.reject('just messing up');
  // throw new Error('just messing up');
};

executePromise(promise)  // an async function returns a promise by default
  .catch(err => console.error('Error!!', err));