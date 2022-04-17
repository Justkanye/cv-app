import React, {Fragment} from 'react';
import Header from './components/Header';
import Section from './components/Section';
import {educations, personalDetails, projects, skills, workExperiences} from './components/List'

function App() {
  return (
    <Fragment>
      <Header />
      <Section title={'Objective'} >
        <p>Enthustiatic Fullstack developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated learn, grow and excel in the web and application development industry.</p>
      </Section>
      <Section title={'Education'} list={educations} />
      <Section title={'Skills'} list={skills} />
      <Section title={'Projects'} list={projects} />
      <Section title={'Work Experinces'} list={workExperiences} />
      <Section title={'Personal Details'} list={personalDetails} />
    </Fragment>
  );
}

export default App;
