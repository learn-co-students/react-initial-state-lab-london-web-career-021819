// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }

  render() {
    return(
      <div>
      {this.state.secondsLeft > 0 ? <h3>{this.state.secondsLeft} seconds left before I go boom!</h3> : <h3>Boom!</h3>}
      </div>
    )
  }

//   It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.


}


export default Bomb
