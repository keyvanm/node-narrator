require('babel-register')({
   presets: [ 'es2015' ]
});

const play = require('./play').default;
console.log(play);
play();
