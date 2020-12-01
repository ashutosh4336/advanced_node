import https from 'https';

const start = Date.now();

function makeReq() {
  https
    .request('https://www.google.com', (res) => {
      // console.log(res);
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

makeReq();
makeReq();
makeReq();
makeReq();
makeReq();
makeReq();
