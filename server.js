// server.listen.test.js
const { spawn } = require('child_process');
const path = require('path');

describe('server listen', () => {
  it('should start the server when executed directly', (done) => {
    const serverProcess = spawn('node', [path.join(__dirname, '../server.js')]);

    serverProcess.stdout.on('data', (data) => {
      if (data.toString().includes('Node.js app listening')) {
        serverProcess.kill();
        done();
      }
    });

    serverProcess.on('error', (err) => {
      done(err);
    });
  });
});
