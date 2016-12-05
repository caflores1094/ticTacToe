var prompt = require('prompt');

var gameBoard = '_|_|_\n_|_|_\n_|_|_';
// var gameBoard = [['_','_','_'],['_','_','_'],['_','_','_']]
var spotsFilled = [0,0,0,0,0,0,0,0,0];
var winner = false;
console.log('HELLO')

prompt.start();

var getMove = function(player){
  console.log('Player' + player + "'s move:")
  prompt.get(['coordinate'], function(err, result){
    if(err){console.log('Error getting coordinate', err)}
    if(player === 1){
      player = 2;
      console.log('your move: ',result.coordinate)
      console.log(gameBoard);
      getMove(player);
    }
    else if(player === 2){
      player = 1;
      console.log('your move: ',result.coordinate)
      console.log(gameBoard);
      getMove(player);
    }
    // console.log('Your coordinate is: ', result.coordinate);
  })
}

var player = 1;
getMove(player);