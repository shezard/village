var React = require('react');

var Game = require('../Game/Game.js');

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = Game.start();
  };

  handleClick = (event) => {
    this.setState(Game.step(this.state, event));
  };

  render() {
    return (
      <div></div>
    );
  }
}

module.exports = GameComponent;
