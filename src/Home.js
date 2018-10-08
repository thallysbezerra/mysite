import React, { Component } from 'react';
import Resume from './widgets/Resume/Resume';
import Main from './components/Main/Main';
import Sidenav from './components/Sidenav/Sidenav';

class Home extends Component {
  render() {
    return (
      <div>

        <Sidenav />
        <Main>
          <Resume />
        </Main>

      </div>
    );
  }
}

export default Home;
