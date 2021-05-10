"use strict";

let listFiles = (() => {
  var _ref = _asyncToGenerator(function* () {
    const dir = process.argv[2] || '.';

    try {
      const files = yield fs_readdir(dir);

      for (const file of files) {
        console.log(file);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return function listFiles() {
    return _ref.apply(this, arguments);
  };
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

listFiles();
