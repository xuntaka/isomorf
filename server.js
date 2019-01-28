require('@babel/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('@babel/polyfill');
require('app.js');

// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
