import React, { Component } from 'react';

class InputBox extends Component {
  constructor() {
    super()

    this.state = { input: '' }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={event => this.setState({ input: event.target.value })}
        />
      </div>
    )
  }


}

export default InputBox