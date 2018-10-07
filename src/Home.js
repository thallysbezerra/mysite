import React, { Component } from 'react';
import Main from './components/Main/Main';
import Resume from './components/Resume/Resume';
import Sidenav from './components/Sidenav/Sidenav';

class Home extends Component {
  render() {
    return (
      <div>

        <Sidenav />

        <Main title="Resume">
          <Resume />
        </Main>

      </div>
    );
  }
}

export default Home;
