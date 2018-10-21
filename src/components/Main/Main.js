import React, { Component } from 'react'
import './css/style.scss'

class Sidenav extends Component {
  render() {

    return (
      <main className="main">
        {this.props.children}
      </main>
    );
  }
}

export default Sidenav;
