import React from 'react';
import NoteForm from '../note-form';

class NoteList extends React.Component {
  render() {
    return (
      <section className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.noteRemove(item)}>X</button>

              <div>
                <p>title: {item.title}</p>
                <p>content: {item.content}</p>
              </div>

              <NoteForm
                note={item}
                submitTitle='update note'
                handleSubmit={(note) => {
                  note.id = item.id;
                  this.props.noteUpdate(note);
                }}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default NoteList;
