import React, { Component } from 'react'
import data from './data.json'

class Sidenav extends Component {

  render() {

    return (
      <div className="sidenav">
        <h1 className="sidenav-name">{data.name}</h1>
        <div className="sidenav-function">{data.function}</div>
        <nav className="sidenav-nav">
            <ul>
                <li><a href="#" title={data.links[0].link}>{data.links[0].link}</a></li>
                <li><a href="#" title={data.links[1].link}>{data.links[1].link}</a></li>
                <li><a href="#" title={data.links[2].link}>{data.links[2].link}</a></li>
            </ul>
        </nav>
        <footer className="sidenav-footer">
          <ul className="sidenav-socialMedias">
            <li><a href={data.socialMedia[0].url} title={data.socialMedia[0].title} target="_blank" className={`fab fa-${data.socialMedia[0].icon}`}></a></li>
            <li><a href={data.socialMedia[1].url} title={data.socialMedia[1].title} target="_blank" className={`fab fa-${data.socialMedia[1].icon}`}></a></li>
            <li><a href={data.socialMedia[2].url} title={data.socialMedia[2].title} target="_blank" className={`fab fa-${data.socialMedia[2].icon}`}></a></li>
          </ul>
          <div className="sidenav-address">
            <span>{data.addresses[0].adress}</span>
            <span>{data.addresses[1].adress}</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Sidenav;
