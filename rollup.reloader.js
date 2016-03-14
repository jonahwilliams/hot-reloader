'use strict';
const express = require('express');
const app = express();
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const fs = require('fs');

const port = 8080;
app.use(express.static(__dirname));

const build = (res) => {
  rollup.rollup({
    entry: './src/containers/ListContainer.js',
    external: ['react'],
    plugins: [ babel() ]
  })
  .then((bundle) => {
    try {
      let result = bundle.generate({
        format: 'iife',
        moduleName: 'ListContainer'
      });
      res.send(result.code);
    } catch (e) {
      console.log(e);
    }
  },
  (err) => {
    console.log(err);
  });
};

app.get('/hot', (req, res) => {
  res.header('Content-Type', 'text/javascript');
  build(res);
});

const server = app.listen(port, () => console.log(`listening on port ${port}`));
const io = require('socket.io')(server);

fs.watch('./src', {persistent: true, recursive: true}, (event, filename) => {
  console.log('FILE CHANGED');
  io.emit('File Change', { for: 'everyone' });
});

io.on('connection', (socket) => {
  console.log('a user connected');
});
