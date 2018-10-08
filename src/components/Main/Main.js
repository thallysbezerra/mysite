import React, { Component } from 'react'
import './css/style.css'

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
