import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>Note App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Note</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
