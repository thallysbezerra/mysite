import React, { Component } from 'react';

class Sidenav extends Component {
  render() {

    return (
      <main className="main">
        <h2 className="main-title">{this.props.title}</h2>
        {this.props.children}
      </main>
    );
  }
}

export default Sidenav;
