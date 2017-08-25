import React from 'react';
import uuid from 'uuid';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    let title = props.note ? props.note.title : '';
    let content = props.note ? props.note.content: '';
    let id = props.note ? props.note.id: uuid.v1();
    let editing = props.note ? props.note.editing: false;
    let completed = props.note ? props.note.completed: false;

    this.state = { title, content, id, editing, completed };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value, type} = e.target;

    if (type === 'string') {
      try {
        this.setState({
          [name]: JSON.parse(value)
        })
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form className='note-create-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <textarea
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    )
  }
}

export default NoteCreateForm;
