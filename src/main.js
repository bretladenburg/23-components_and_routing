import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import uuid from 'uuid/v1'
import {BrowserRouter, Route} from 'react-router-dom';

import NoteContainer from './component/note-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={() => <NoteContainer app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
