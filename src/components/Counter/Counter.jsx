import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
