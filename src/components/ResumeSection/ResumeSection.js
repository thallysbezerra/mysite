import React, { Component } from 'react'
import './css/style.css'

class ResumeSection extends Component {
  render() {

    return (
          <div>
            <h3 className="resume-title"><i className={`fa fa-${this.props.icon}`}></i>{this.props.title}</h3>
            {this.props.children}
          </div>
    );
  }
}

export default ResumeSection;
