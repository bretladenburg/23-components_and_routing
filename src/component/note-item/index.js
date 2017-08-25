import './_note-container.scss';
import React from 'react';
import uuid from 'uuid';
import Modal from '../modal';
import Navbar from '../navbar';
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showErrors: true
    }

    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid.v1();
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note])
    }));
  }

  noteRemove(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      })
    }));
  }

  noteUpdate(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      })
    }));
  }

  render() {
    let {app} = this.props;

    console.log('__STATE__', app.state);

    return (
      <section className='note'>
        <Navbar />

        <NoteCreateForm
          handleSubmit={this.noteCreate}
          submitTitle='add note'
        />

        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          notes={app.state.notes}
        />
      </section>
    )
  }
}

export default NoteItem;
