import https from 'https';
import crypto from 'crypto';
import fs from 'fs';

const start = Date.now();

function makeReq() {
  https
    .request('https://www.google.com', (res) => {
      // console.log(res);
      res.on('data', () => {});
      res.on('end', () => {
        console.log('HTTPS TimeTaken', Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 1000000, 521, 'sha512', () => {
    console.log('1st Timetaken : ', Date.now() - start);
  });
}

makeReq();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS : ', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
