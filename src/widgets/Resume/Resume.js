import React, { Component } from 'react'
import ResumeSection from './../../components/ResumeSection/ResumeSection'
import './css/style.scss'
import data from './data.json'

class Sidenav extends Component {
  render() {

    return (
        <section className="resume">

          <h2>{data.title}</h2>

          <ResumeSection icon={data.section[0].icon} title={data.section[0].title}>
            <p>{data.section[0].paragraphs[0].paragraph}</p>
            <p>{data.section[0].paragraphs[1].paragraph}</p>
          </ResumeSection>

          <ResumeSection icon={data.section[1].icon} title={data.section[1].title}>
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
          </ResumeSection>

          <ResumeSection icon={data.section[2].icon} title={data.section[2].title}>
            <ul>
              <li>
                <p><b>{data.section[2].courses[0].course}</b></p>
                <p>{data.section[2].courses[0].institute}</p>
              </li>
              <li>
                <p><b>{data.section[2].courses[1].course}</b></p>
                <p>{data.section[2].courses[1].institute}</p>
              </li>
            </ul>
          </ResumeSection>

          <ResumeSection icon={data.section[3].icon} title={data.section[3].title}>
            <ul>
              <li>
                <p><b>{data.section[3].courses[0].course}</b></p>
                <p>{data.section[3].courses[0].institute}</p>
              </li>
              <li>
                <p><b>{data.section[3].courses[1].course}</b></p>
                <p>{data.section[3].courses[1].institute}</p>
              </li>
              <li>
                <p><b>{data.section[3].courses[2].course}</b></p>
                <p>{data.section[3].courses[2].institute}</p>
              </li>
              <li>
                <p><b>{data.section[3].courses[3].course}</b></p>
                <p>{data.section[3].courses[3].institute}</p>
              </li>
              <li>
                <p><b>{data.section[3].courses[4].course}</b></p>
                <p>{data.section[3].courses[4].institute}</p>
              </li>
              <li>
                <p><b>{data.section[3].courses[5].course}</b></p>
                <p>{data.section[3].courses[5].institute}</p>
              </li>
            </ul>
          </ResumeSection>

        </section>
    );
  }
}

export default Sidenav;
