import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  // handleNameChange = event => {
  //   //   this.setState({ name: event.currentTarget.value });
  //   // };
  //   // handleTagChange = event => {
  //   //   this.setState({ tag: event.currentTarget.value });
  //   // };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = e => {
    this.setState({ license: e.currentTarget.checked });
  };
  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            // onChange={this.handleNameChange}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            // onChange={this.handleTagChange}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license} // для множественного чекбокса нужен value
          />
          Согласен
        </label>
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
