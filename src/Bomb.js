import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  
  render () {
    const { secondsLeft } = this.state
    return (
      secondsLeft === 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`
    )
  }
}

export default Bomb;