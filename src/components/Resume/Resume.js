import React, { Component } from 'react'
import data from './data.json'

class Sidenav extends Component {
  render() {

    return (
      <section className="resume">

        <div>
          <h3 className="resume-title"><i className={data.section[0].icon}></i>{data.section[0].title}</h3>
          <p>{data.section[0].paragraphs[0].paragraph}</p>
          <p>{data.section[0].paragraphs[1].paragraph}</p>
        </div>

        <div>
          <h3 className="resume-title"><i className={`${data.section[1].icon}`}></i>{data.section[1].title}</h3>

          <p><b>{data.section[1].company[0].name}</b></p>
          <ul className="resume-functions">
            <li><b>{data.section[1].company[0].functions[0].function}</b>{data.section[1].company[0].functions[0].period}</li>
          </ul>
          <ul className="resume-activitities">
            <li>{data.section[1].company[0].activitities[0].activitity}</li>
            <li>{data.section[1].company[0].activitities[1].activitity}</li>
            <li>{data.section[1].company[0].activitities[2].activitity}</li>
            <li>{data.section[1].company[0].activitities[3].activitity}</li>
            <li>{data.section[1].company[0].activitities[4].activitity}</li>
            <li>{data.section[1].company[0].activitities[5].activitity}</li>
            <li>{data.section[1].company[0].activitities[6].activitity}</li>
            <li>{data.section[1].company[0].activitities[7].activitity}</li>
          </ul>
          
          <p><b>{data.section[1].company[1].name}</b></p>
          <ul className="resume-functions">
            <li><b>{data.section[1].company[1].functions[0].function}</b>{data.section[1].company[1].functions[0].period}</li>
            <li><b>{data.section[1].company[1].functions[1].function}</b>{data.section[1].company[1].functions[1].period}</li>
            <li><b>{data.section[1].company[1].functions[2].function}</b>{data.section[1].company[1].functions[2].period}</li>
          </ul>
          <ul className="resume-activitities">
            <li>{data.section[1].company[1].activitities[0].activitity}</li>
            <li>{data.section[1].company[1].activitities[1].activitity}</li>
            <li>{data.section[1].company[1].activitities[2].activitity}</li>
            <li>{data.section[1].company[1].activitities[3].activitity}</li>
            <li>{data.section[1].company[1].activitities[4].activitity}</li>
            <li>{data.section[1].company[1].activitities[5].activitity}</li>
            <li>{data.section[1].company[1].activitities[6].activitity}</li>
          </ul>

        </div>

      </section>
    );
  }
}

export default Sidenav;
