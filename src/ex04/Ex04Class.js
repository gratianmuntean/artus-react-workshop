import React, { Component } from 'react';

class Ex04Class extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      counter: 0,
      name: 'Nameee'
    }
  }

  componentDidMount() {
    console.log('on component mount');
  }

  onClickHandler() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.name} | {this.props.surname}</p>
        <button type='button' onClick={this.onClickHandler}>Increase</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}

export default Ex04Class;