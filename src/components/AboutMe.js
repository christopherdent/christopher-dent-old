import React from 'react';
import AboutTable from './AboutTable'
import LearnMore from './LearnMore'
import ColoredLine from './ColoredLine'
import { Accordion, Button, Card, CardColumns, Image, Table } from 'react-bootstrap';


const AboutMe = (props) => {

    // {props.aboutMe}  same as sending <AboutTable /> and its props down
  return (

<React.Fragment>
<br /><br />
<h1 id="about" className='heading'>About Me</h1>
<br />
  <CardColumns>
    {props.aboutMe}
  </CardColumns>
<br />
<center>
  <Accordion>
  <Accordion.Toggle as={Button} eventKey="0">
      <span>-             Full Bio                -</span>
        </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <LearnMore />
        </Accordion.Collapse>
    </Accordion>
    </center>
<br />
<ColoredLine color="steelblue" />
</React.Fragment>
  )

}


export default AboutMe
