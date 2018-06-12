var Tile = require('./Tile');

var generate = function(w, h) {
  var tiles = [];

  for(var x ; x < w ; x++) {
    tiles[x] = tiles[x] || [];
    for(var y ; y < h ; y++) {
      tiles[x][y] = new Tile();
    }
  }

  return tiles;
};

module.exports = {
  generate: generate
};
