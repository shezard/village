var State = require('./State');
var _ = require('lodash');
var generateTiles = require('./Tiles').generate;

module.exports = {
  start: start,
  step: step,
};

function start() {

  var tiles = generateTiles(9, 9);

  return {
    day: 0,
    tiles: tiles
  };
}

function step(state, event) {
  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  state = turnStart(state);

  var nextState = {
    day: state.day + 1,
    tiles: state.tiles
  };

  return nextState;
}

function turnStart(state) {
  return state;
}
