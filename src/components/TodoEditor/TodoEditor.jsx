import { Component } from 'react';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';

class TodoEditor extends Component {
  state = {
    message: '',
  };
  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <IconButton type="submit">
          <AddIcon width={20} height={20} />
        </IconButton>
      </form>
    );
  }
}

export default TodoEditor;
