import React from 'react';
import AboutTable from './AboutTable'
import LearnMore from './LearnMore'
import ColoredLine from './ColoredLine'
import { Accordion, Button, Card, CardColumns, Image, Table } from 'react-bootstrap';


const AboutMe = (props) => {
//try to make text wrap around image.  You will use a more generic image as the hero, like the one on godaddy.
  return (

<React.Fragment>
<br /><br />
<h2 id="about" className='heading'>About Me</h2>
<AboutTable />
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
<ColoredLine color="grey" />
</React.Fragment>
  )

}


export default AboutMe
